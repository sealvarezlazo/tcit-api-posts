import { Injectable } from '@nestjs/common';
import { IPosts } from 'src/interface/IPost';
import { PostsRepositoy } from 'src/repository/posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly _postsRepositoy: PostsRepositoy) {}

  async getAllPosts() {
    const posts = await this._postsRepositoy.findAll();
    return posts;
  }

  async createPosts(post: IPosts) {
    const posts = await this._postsRepositoy.create(post);
    return posts;
  }

  async findPostsById(id: number) {
    const posts = await this._postsRepositoy.findOne(id);
    return posts;
  }

  async deletePostsById(id: number) {
    const posts = await this._postsRepositoy.remove(id);
    return posts;
  }
}
