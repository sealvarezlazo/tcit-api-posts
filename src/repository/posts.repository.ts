import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './entity/posts.entity';
import { IPosts } from 'src/interface/IPost';

@Injectable()
export class PostsRepositoy {
  constructor(
    @InjectRepository(Posts)
    private postRepository: Repository<Posts>,
  ) {}

  findAll(): Promise<IPosts[]> {
    return this.postRepository.find();
  }

  findOne(id: number): Promise<IPosts> {
    return this.postRepository.findOneBy({ id });
  }

  create(posts: IPosts): Promise<Posts> {
    return this.postRepository.save(posts);
  }

  async remove(id: number): Promise<any> {
    const entidad = await this.findOne(id);
    const response = await this.postRepository.delete(id);
    if (response?.affected === 1) return entidad;

    return { error: 'se ha generado un error al eliminar registro' };
  }
}
