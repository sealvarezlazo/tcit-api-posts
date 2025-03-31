import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from './controller/posts.controller';
import { PostsService } from './modules/posts/posts.service';
import { Posts } from './repository/entity/posts.entity';
import { PostsRepositoy } from './repository/posts.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'tcit',
      password: 'tcit',
      database: 'tcit',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Posts]),
  ],
  controllers: [PostsController],
  providers: [PostsService, PostsRepositoy],
})
export class AppModule {}
