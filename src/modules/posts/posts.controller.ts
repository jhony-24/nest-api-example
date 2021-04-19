import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Posts } from 'src/core/schemas/Posts.schema';
import ICreateNewPost from './interfaces/ICreateNewPost';
import { PostsService } from './posts.service';
import { Request } from 'express';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/')
  async getAllPosts(): Promise<Posts[]> {
    return this.postsService.getAllPosts();
  }

  @Get('/search')
  async searchPosts(@Req() request: Request): Promise<Posts[]> {
    const queryParams = request.query;
    const searchValue = queryParams.q as string;
    return this.postsService.searchPosts(searchValue);
  }

  @Post('/')
  async createNewPost(@Body() post: ICreateNewPost): Promise<Posts> {
    return this.postsService.createNewPost(post);
  }
}
