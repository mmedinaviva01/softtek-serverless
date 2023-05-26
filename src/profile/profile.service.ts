import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import * as AWS from 'aws-sdk';
import Profile from './interface';

const dynamoDB = process.env.IS_OFFLINE
  ? new AWS.DynamoDB.DocumentClient({
      region: 'local',
      endpoint: 'http://localhost:5000',
    })
  : new AWS.DynamoDB.DocumentClient();

@Injectable()
export class ProfileService {
  async getAllProfile(): Promise<any> {
    try {
      return dynamoDB
        .scan({
          TableName: 'profileTable',
        })
        .promise();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async createProfile(profile: Profile): Promise<any> {
    const profileResp = {
      id: uuid(),
      ...profile,
    };
    try {
      await dynamoDB
        .put({
          TableName: 'profileTable',
          Item: profileResp,
          ReturnValues: 'ALL_OLD',
        })
        .promise();
      return this.getProfile(profileResp.id);
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e);
    }
  }

  async getProfile(id: string): Promise<any> {
    try {
      return await dynamoDB
        .get({
          TableName: 'profileTable',
          Key: { id },
        })
        .promise();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async deleteProfile(id: any): Promise<any> {
    try {
      return await dynamoDB
        .delete({
          TableName: 'profileTable',
          Key: {
            id: id,
          },
        })
        .promise();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
