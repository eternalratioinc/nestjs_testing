import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  url: 'postgres://mkhzwvgmqcnlct:9c7846a0f82d487d66f120f60ab899432f1bcaeab9bfa2eb43c2eeb1a7923020@ec2-107-22-83-3.compute-1.amazonaws.com:5432/defjbv1u5cou76', 
  type: 'postgres',
  autoLoadEntities: true, 
  synchronize: false 
};
