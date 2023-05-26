import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';
import Profile from './interface';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async getAllProfile(): Promise<Profile> {
    return await this.profileService.getAllProfile();
  }

  @Post()
  async createProfile(@Body() profile: Profile): Promise<Profile> {
    return await this.profileService.createProfile(profile);
  }
  @Get(':id')
  async getProfile(@Param('id') id: string): Promise<Profile> {
    return await this.profileService.getProfile(id);
  }

  @Delete(':id')
  async deleteProfile(@Param('id') id: string): Promise<any> {
    return await this.profileService.deleteProfile(id);
  }
}
