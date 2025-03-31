import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from 'src/modules/posts/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly _postsService: PostsService) {}

  @Get()
  async getAllPosts(): Promise<any> {
    const response = await this._postsService.getAllPosts();
    return response;
  }

  @Get('/:idPosts')
  // @ApiParam({ name: 'idPosts', type: 'string' })
  async findPostsById(@Param('idPosts') idPosts: number): Promise<any> {
    const response = await this._postsService.findPostsById(idPosts);
    return response;
  }

  @Post()
  async createPosts(@Body() body: any): Promise<any> {
    const response = await this._postsService.createPosts(body);
    return response;
  }

  @Delete('/:idPosts')
  // @ApiParam({ name: 'idPosts', type: 'string' })
  async deletePostsById(@Param('idPosts') idPosts: number): Promise<any> {
    const response = await this._postsService.deletePostsById(idPosts);
    return response;
  }
}
