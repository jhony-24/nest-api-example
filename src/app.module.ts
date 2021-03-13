import { Module } from '@nestjs/common';
import { PostsModule } from './modules/posts/posts.module';
import { AccountModule } from './modules/account/account.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URL } from './config';

@Module({
  imports: [MongooseModule.forRoot(MONGO_URL), PostsModule, AccountModule],
})
export class AppModule {}
