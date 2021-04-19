import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Posts, PostsDocument } from 'src/core/schemas/Posts.schema';
import { Model } from 'mongoose';
import ICreateNewPost from './interfaces/ICreateNewPost';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts.name) private readonly postsModel: Model<PostsDocument>,
  ) {}

  async getAllPosts(): Promise<Posts[]> {
    return this.postsModel.find().exec();
  }

  async searchPosts(searchValue: string): Promise<Posts[]> {
    return this.postsModel
      .find({
        $or: [
          {
            content: {
              $regex: searchValue,
              $options: 'i',
            },
            tags: {
              $in: [searchValue],
            },
          },
        ],
      })
      .exec();
  }

  async getPostById(id: string): Promise<Posts> {
    return this.postsModel.findOne({ id }).exec();
  }

  async createNewPost(newPost: ICreateNewPost): Promise<Posts> {
    const createdPost = await this.postsModel.create(newPost);
    return createdPost;
  }
}
