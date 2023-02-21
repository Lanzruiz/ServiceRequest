import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'MongoData',
  connector: 'mongodb',
  url: 'mongodb+srv://lanzruiz:bqgJs1ZHFG7pQRzP@cluster0.i1at06q.mongodb.net/test',
  host: 'ac-s0mwv1o-shard-00-00.i1at06q.mongodb.net',
  port: 27017,
  user: 'lanzruiz',
  password: 'x7NXYchrPcepbdCh',
  database: 'user',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoDataDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'MongoData';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.MongoData', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
