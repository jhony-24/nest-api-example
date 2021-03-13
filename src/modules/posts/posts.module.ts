import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Posts, PostsSchema } from 'src/core/schemas/Posts.schema';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  providers: [
    MongooseModule.forFeature([{ name: Posts.name, schema: PostsSchema }]),
    PostsService,
  ],
  controllers: [PostsController],
})
export class PostsModule {}
