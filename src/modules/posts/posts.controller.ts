import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import ICreateNewPost from './interfaces/ICreateNewPost';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts(): Promise<string[]> {
    return [];
  }

  @Get(':id')
  async getPostById(@Param('id') id: string): Promise<string> {
    return `Post from ${id}`;
  }

  @Post()
  async createNewPost(@Body() post: ICreateNewPost): Promise<string> {
    console.log(post);
    return '';
  }
}
