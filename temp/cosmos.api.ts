// @public (undocumented)
class ClientSideMetrics {
  constructor(requestCharge: number);
  add(...clientSideMetricsArray: ClientSideMetrics[]): ClientSideMetrics;
  // (undocumented)
  static createFromArray(...clientSideMetricsArray: ClientSideMetrics[]): ClientSideMetrics;
  // (undocumented)
  readonly requestCharge: number;
  // (undocumented)
  static readonly zero: ClientSideMetrics;
}

// @public
class Conflict {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(container: Container, id: string, clientContext: ClientContext);
  // (undocumented)
  readonly container: Container;
  delete(options?: RequestOptions): Promise<ConflictResponse>;
  // (undocumented)
  readonly id: string;
  read(options?: RequestOptions): Promise<ConflictResponse>;
  readonly url: string;
}

// @public (undocumented)
interface ConflictDefinition {
  // (undocumented)
  content?: string;
  id?: string;
  // (undocumented)
  operationType?: string;
  resourceId?: string;
  // (undocumented)
  resourceType?: string;
}

// @public (undocumented)
enum ConflictResolutionMode {
  // (undocumented)
  Custom = "Custom",
  // (undocumented)
  LastWriterWins = "LastWriterWins"
}

// @public
interface ConflictResolutionPolicy {
  conflictResolutionPath?: string;
  conflictResolutionProcedure?: string;
  mode?: keyof typeof ConflictResolutionMode;
}

// @public (undocumented)
interface ConflictResponse extends CosmosResponse<ConflictDefinition & Resource, Conflict> {
  conflict: Conflict;
}

// @public
class Conflicts {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(container: Container, clientContext: ClientContext);
  // (undocumented)
  readonly container: Container;
  query(query: SqlQuerySpec, options?: FeedOptions): QueryIterator<any>;
  readAll(options?: FeedOptions): QueryIterator<ConflictDefinition & Resource>;
}

// @public
enum ConnectionMode {
  Gateway = 0
}

// @public
class ConnectionPolicy {
  ConnectionMode: ConnectionMode;
  DisableSSLVerification: boolean;
  EnableEndpointDiscovery: boolean;
  MediaReadMode: keyof typeof MediaReadMode;
  MediaRequestTimeout: number;
  PreferredLocations: string[];
  ProxyUrl: string;
  RequestTimeout: number;
  RetryOptions: RetryOptions;
  UseMultipleWriteLocations: boolean;
}

// @public
enum ConsistencyLevel {
  BoundedStaleness = "BoundedStaleness",
  ConsistentPrefix = "ConsistentPrefix",
  Eventual = "Eventual",
  Session = "Session",
  Strong = "Strong"
}

// @public
class Container {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(database: Database, id: string, clientContext: ClientContext);
  conflict(id: string): Conflict;
  // (undocumented)
  readonly conflicts: Conflicts;
  // (undocumented)
  readonly database: Database;
  delete(options?: RequestOptions): Promise<ContainerResponse>;
  // (undocumented)
  extractPartitionKey(document: any, partitionKeyDefinition: PartitionKeyDefinition): PartitionKey[];
  // WARNING: The type "CosmosResponse" needs to be exported by the package (e.g. added to index.ts)
  getPartitionKeyDefinition(): Promise<CosmosResponse<PartitionKeyDefinition, Container>>;
  // (undocumented)
  readonly id: string;
  item(id: string, partitionKey?: string): Item;
  readonly items: Items;
  read(options?: RequestOptions): Promise<ContainerResponse>;
  replace(body: ContainerDefinition, options?: RequestOptions): Promise<ContainerResponse>;
  storedProcedure(id: string): StoredProcedure;
  readonly storedProcedures: StoredProcedures;
  trigger(id: string): Trigger;
  readonly triggers: Triggers;
  readonly url: string;
  userDefinedFunction(id: string): UserDefinedFunction;
  readonly userDefinedFunctions: UserDefinedFunctions;
}

// @public (undocumented)
interface ContainerDefinition {
  conflictResolutionPolicy?: ConflictResolutionPolicy;
  defaultTtl?: number;
  id?: string;
  indexingPolicy?: IndexingPolicy;
  // (undocumented)
  partitionKey?: PartitionKeyDefinition;
}

// @public
interface ContainerResponse extends CosmosResponse<ContainerDefinition & Resource, Container> {
  container: Container;
}

// @public
class Containers {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(database: Database, clientContext: ClientContext);
  create(body: ContainerDefinition, options?: RequestOptions): Promise<ContainerResponse>;
  createIfNotExists(body: ContainerDefinition, options?: RequestOptions): Promise<ContainerResponse>;
  // (undocumented)
  readonly database: Database;
  query(query: SqlQuerySpec, options?: FeedOptions): QueryIterator<any>;
  readAll(options?: FeedOptions): QueryIterator<ContainerDefinition & Resource>;
}

// @public
class CosmosClient {
  constructor(options: CosmosClientOptions);
  database(id: string): Database;
  readonly databases: Databases;
  // WARNING: The type "CosmosResponse" needs to be exported by the package (e.g. added to index.ts)
  getDatabaseAccount(options?: RequestOptions): Promise<CosmosResponse<DatabaseAccount, CosmosClient>>;
  getReadEndpoitn(): Promise<string>;
  getWriteEndpoint(): Promise<string>;
  offer(id: string): Offer;
  readonly offers: Offers;
}

// @public (undocumented)
interface CosmosClientOptions {
  // (undocumented)
  agent?: Agent;
  auth: AuthOptions;
  connectionPolicy?: ConnectionPolicy | {
          [P in keyof ConnectionPolicy]?: ConnectionPolicy[P];
      };
  consistencyLevel?: keyof typeof ConsistencyLevel;
  // (undocumented)
  defaultHeaders?: IHeaders;
  endpoint: string;
  // (undocumented)
  queryCompatibilityMode?: QueryCompatibilityMode;
}

// @public
class Database {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(client: CosmosClient, id: string, clientContext: ClientContext);
  // (undocumented)
  readonly client: CosmosClient;
  container(id: string): Container;
  readonly containers: Containers;
  delete(options?: RequestOptions): Promise<DatabaseResponse>;
  // (undocumented)
  readonly id: string;
  read(options?: RequestOptions): Promise<DatabaseResponse>;
  readonly url: string;
  user(id: string): User;
  readonly users: Users;
}

// @public
class DatabaseAccount {
  constructor(body: {
          [key: string]: any;
      }, headers: IHeaders);
  readonly ConsistencyPolicy: ConsistencyLevel;
  readonly CurrentMediaStorageUsageInMB: number;
  readonly DatabasesLink: string;
  // (undocumented)
  readonly enableMultipleWritableLocations: boolean;
  readonly MaxMediaStorageUsageInMB: number;
  readonly MediaLink: string;
  readonly readableLocations: Location[];
  readonly writableLocations: Location[];
}

// @public (undocumented)
interface DatabaseDefinition {
  id?: string;
}

// @public
interface DatabaseResponse extends CosmosResponse<DatabaseDefinition & Resource, Database> {
  database: Database;
}

// @public
class Databases {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(client: CosmosClient, clientContext: ClientContext);
  // (undocumented)
  readonly client: CosmosClient;
  create(body: DatabaseDefinition, options?: RequestOptions): Promise<DatabaseResponse>;
  createIfNotExists(body: DatabaseDefinition, options?: RequestOptions): Promise<DatabaseResponse>;
  query(query: string | SqlQuerySpec, options?: FeedOptions): QueryIterator<any>;
  readAll(options?: FeedOptions): QueryIterator<DatabaseDefinition & Resource>;
}

// @public
enum DataType {
  LineString = "LineString",
  Number = "Number",
  Point = "Point",
  Polygon = "Polygon",
  String = "String"
}

// @public (undocumented)
interface ErrorResponse {
  // (undocumented)
  [key: string]: any;
  // (undocumented)
  activityId?: string;
  // (undocumented)
  body?: any;
  // (undocumented)
  code?: number;
  // (undocumented)
  headers?: IHeaders;
  // (undocumented)
  retryAfterInMilliseconds?: number;
  // (undocumented)
  substatus?: number;
}

// @public
interface FeedOptions {
  a_im?: string;
  accessCondition?: {
    condition: string;
    type: string;
  }
  continuation?: string;
  disableRUPerMinuteUsage?: boolean;
  enableCrossPartitionQuery?: boolean;
  enableScanInQuery?: boolean;
  initialHeaders?: IHeaders;
  maxDegreeOfParallelism?: number;
  maxItemCount?: number;
  partitionKey?: string;
  populateQueryMetrics?: boolean;
  sessionToken?: string;
}

// @public (undocumented)
interface IHeaders {
  // (undocumented)
  [key: string]: any;
}

// @public (undocumented)
interface Index {
  // (undocumented)
  dataType: keyof typeof DataType;
  // (undocumented)
  kind: keyof typeof IndexKind;
  // (undocumented)
  precision?: number;
}

// @public (undocumented)
interface IndexedPath {
  // (undocumented)
  indexes?: Index[];
  // (undocumented)
  path: string;
}

// @public
enum IndexingMode {
  consistent = "consistent",
  lazy = "lazy",
  none = "none"
}

// @public (undocumented)
interface IndexingPolicy {
  // (undocumented)
  automatic?: boolean;
  // WARNING: Unable to find referenced export "@azure/cosmos#IncludedPath"
  excludedPaths?: IndexedPath[];
  // WARNING: Unable to find referenced export "@azure/cosmos#IncludedPath"
  includedPaths?: IndexedPath[];
  indexingMode?: keyof typeof IndexingMode;
}

// @public
enum IndexKind {
  Hash = "Hash",
  Range = "Range",
  Spatial = "Spatial"
}

// @public
class Item {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(container: Container, id: string, primaryKey: string, clientContext: ClientContext);
  // (undocumented)
  readonly container: Container;
  delete(options?: RequestOptions): Promise<ItemResponse<ItemDefinition>>;
  // (undocumented)
  readonly id: string;
  // (undocumented)
  readonly primaryKey: string;
  read(options?: RequestOptions): Promise<ItemResponse<ItemDefinition>>;
  replace(body: ItemDefinition, options?: RequestOptions): Promise<ItemResponse<ItemDefinition>>;
  readonly url: string;
}

// WARNING: Unable to find referenced export "@azure/cosmos#ItemBody"
// @public
interface ItemDefinition {
  // (undocumented)
  [key: string]: any;
}

// @public (undocumented)
interface ItemResponse<T extends ItemDefinition> extends CosmosResponse<T & Resource, Item> {
  item: Item;
}

// @public
class Items {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(container: Container, clientContext: ClientContext);
  // (undocumented)
  readonly container: Container;
  create(body: any, options?: RequestOptions): Promise<ItemResponse<ItemDefinition>>;
  query(query: string | SqlQuerySpec, options?: FeedOptions): QueryIterator<any>;
  readAll(options?: FeedOptions): QueryIterator<ItemDefinition>;
  upsert(body: any, options?: RequestOptions): Promise<ItemResponse<ItemDefinition>>;
}

// @public
interface Location {
  // (undocumented)
  databaseAccountEndpoint: string;
  // (undocumented)
  name: string;
}

// @public
interface MediaOptions {
  contentType?: string;
  initialHeaders?: IHeaders;
  slug?: string;
}

// @public
enum MediaReadMode {
  Buffered = "Buffered",
  Streamed = "Streamed"
}

// @public
class Offer {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(client: CosmosClient, id: string, clientContext: ClientContext);
  // (undocumented)
  readonly client: CosmosClient;
  // (undocumented)
  readonly id: string;
  read(options?: RequestOptions): Promise<OfferResponse>;
  replace(body: OfferDefinition, options?: RequestOptions): Promise<OfferResponse>;
  readonly url: string;
}

// @public (undocumented)
interface OfferDefinition {
  // (undocumented)
  content?: {
    offerIsRUPerMinuteThroughputEnabled: boolean;
    offerThroughput: number;
  }
  // (undocumented)
  id?: string;
  // (undocumented)
  offerResourceId?: string;
  // (undocumented)
  offerType?: string;
  // (undocumented)
  offerVersion?: string;
  // (undocumented)
  resource?: string;
}

// @public (undocumented)
interface OfferResponse extends CosmosResponse<OfferDefinition & Resource, Offer> {
  offer: Offer;
}

// @public
class Offers {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(client: CosmosClient, clientContext: ClientContext);
  // (undocumented)
  readonly client: CosmosClient;
  query(query: SqlQuerySpec, options?: FeedOptions): QueryIterator<any>;
  readAll(options?: FeedOptions): QueryIterator<OfferDefinition & Resource>;
}

// @public (undocumented)
interface PartitionKeyDefinition {
  // (undocumented)
  kind: keyof typeof PartitionKind;
  // (undocumented)
  paths: string[];
}

// @public (undocumented)
enum PartitionKind {
  // (undocumented)
  Hash = "Hash"
}

// @public
class Permission {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(user: User, id: string, clientContext: ClientContext);
  delete(options?: RequestOptions): Promise<PermissionResponse>;
  // (undocumented)
  readonly id: string;
  read(options?: RequestOptions): Promise<PermissionResponse>;
  replace(body: PermissionDefinition, options?: RequestOptions): Promise<PermissionResponse>;
  readonly url: string;
  // (undocumented)
  readonly user: User;
}

// @public (undocumented)
interface PermissionDefinition {
  id: string;
  permissionMode: PermissionMode;
  resource: string;
  // (undocumented)
  resourcePartitionKey?: string | any[];
}

// @public
enum PermissionMode {
  All = "all",
  None = "none",
  Read = "read"
}

// WARNING: The type "PermissionBody" needs to be exported by the package (e.g. added to index.ts)
// @public (undocumented)
interface PermissionResponse extends CosmosResponse<PermissionDefinition & PermissionBody & Resource, Permission> {
  permission: Permission;
}

// @public
class Permissions {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(user: User, clientContext: ClientContext);
  create(body: PermissionDefinition, options?: RequestOptions): Promise<PermissionResponse>;
  query(query: SqlQuerySpec, options?: FeedOptions): QueryIterator<any>;
  readAll(options?: FeedOptions): QueryIterator<PermissionDefinition & Resource>;
  upsert(body: PermissionDefinition, options?: RequestOptions): Promise<PermissionResponse>;
  // (undocumented)
  readonly user: User;
}

// @public (undocumented)
enum QueryCompatibilityMode {
  // (undocumented)
  Default = 0,
  // (undocumented)
  Query = 1,
  // (undocumented)
  SqlQuery = 2
}

// @public
class QueryIterator<T> {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  // WARNING: The type "FetchFunctionCallback" needs to be exported by the package (e.g. added to index.ts)
  // WARNING: The type "FetchFunctionCallback" needs to be exported by the package (e.g. added to index.ts)
  constructor(clientContext: ClientContext, query: SqlQuerySpec | string, options: FeedOptions, // TODO: any options
      fetchFunctions: FetchFunctionCallback | FetchFunctionCallback[], resourceLink?: string | string[]);
  current(): Promise<Response<T>>;
  executeNext(): Promise<Response<T>>;
  forEach(callback: (result: T, headers?: IHeaders, index?: number) => boolean | void): Promise<void>;
  getAsyncIterator(): AsyncIterable<Response<T>>;
  // @deprecated (undocumented)
  hasMoreResults(): boolean;
  nextItem(): Promise<Response<T>>;
  reset(): void;
  toArray(): Promise<Response<T[]>>;
}

// @public (undocumented)
class QueryMetrics {
  constructor(retrievedDocumentCount: number, retrievedDocumentSize: number, outputDocumentCount: number, outputDocumentSize: number, indexHitDocumentCount: number, totalQueryExecutionTime: TimeSpan, queryPreparationTimes: QueryPreparationTimes, indexLookupTime: TimeSpan, documentLoadTime: TimeSpan, vmExecutionTime: TimeSpan, runtimeExecutionTimes: RuntimeExecutionTimes, documentWriteTime: TimeSpan, clientSideMetrics: ClientSideMetrics);
  add(queryMetricsArray: QueryMetrics[]): QueryMetrics;
  // (undocumented)
  readonly clientSideMetrics: ClientSideMetrics;
  static createFromArray(queryMetricsArray: QueryMetrics[]): QueryMetrics;
  static createFromDelimitedString(delimitedString: string, clientSideMetrics?: ClientSideMetrics): QueryMetrics;
  // (undocumented)
  readonly documentLoadTime: TimeSpan;
  // (undocumented)
  readonly documentWriteTime: TimeSpan;
  // (undocumented)
  readonly indexHitDocumentCount: number;
  readonly indexHitRatio: number;
  // (undocumented)
  readonly indexLookupTime: TimeSpan;
  // (undocumented)
  readonly outputDocumentCount: number;
  // (undocumented)
  readonly outputDocumentSize: number;
  // (undocumented)
  readonly queryPreparationTimes: QueryPreparationTimes;
  // (undocumented)
  readonly retrievedDocumentCount: number;
  // (undocumented)
  readonly retrievedDocumentSize: number;
  // (undocumented)
  readonly runtimeExecutionTimes: RuntimeExecutionTimes;
  toDelimitedString(): string;
  // (undocumented)
  readonly totalQueryExecutionTime: TimeSpan;
  // (undocumented)
  readonly vmExecutionTime: TimeSpan;
  // (undocumented)
  static readonly zero: QueryMetrics;
}

// @public (undocumented)
class QueryMetricsUtils {
  // (undocumented)
  static isNumeric(input: any): boolean;
  // (undocumented)
  static parseDelimitedString: {
    [key: string]: any;
  }
  // (undocumented)
  static timeSpanFromMetrics(metrics: {
          [key: string]: any;
      }, key: string): TimeSpan;
}

// @public (undocumented)
class QueryPreparationTimes {
  constructor(queryCompilationTime: TimeSpan, logicalPlanBuildTime: TimeSpan, physicalPlanBuildTime: TimeSpan, queryOptimizationTime: TimeSpan);
  add(...queryPreparationTimesArray: QueryPreparationTimes[]): QueryPreparationTimes;
  static createFromArray(queryPreparationTimesArray: QueryPreparationTimes[]): QueryPreparationTimes;
  static createFromDelimitedString(delimitedString: string): QueryPreparationTimes;
  // (undocumented)
  readonly logicalPlanBuildTime: TimeSpan;
  // (undocumented)
  readonly physicalPlanBuildTime: TimeSpan;
  // (undocumented)
  readonly queryCompilationTime: TimeSpan;
  // (undocumented)
  readonly queryOptimizationTime: TimeSpan;
  toDelimitedString(): string;
  // (undocumented)
  static readonly zero: QueryPreparationTimes;
}

// @public
interface RequestOptions {
  accessCondition?: {
    condition: string;
    type: string;
  }
  consistencyLevel?: string;
  disableAutomaticIdGeneration?: boolean;
  disableRUPerMinuteUsage?: boolean;
  enableScriptLogging?: boolean;
  indexingDirective?: string;
  initialHeaders?: IHeaders;
  offerEnableRUPerMinuteThroughput?: boolean;
  offerThroughput?: number;
  offerType?: string;
  partitionKey?: PartitionKey | PartitionKey[];
  populateQuotaInfo?: boolean;
  postTriggerInclude?: string | string[];
  preTriggerInclude?: string | string[];
  resourceTokenExpirySeconds?: number;
  sessionToken?: string;
  skipGetPartitionKeyDefinition?: boolean;
  urlConnection?: string;
}

// @public (undocumented)
interface Resource {
  _etag: string;
  _rid: string;
  _self: string;
  _ts: string;
  id: string;
}

// @public (undocumented)
interface Response<T> {
  // (undocumented)
  headers?: IHeaders;
  // (undocumented)
  result?: T;
}

// @public
class RetryOptions {
  constructor(
      MaxRetryAttemptCount?: number, 
      FixedRetryIntervalInMilliseconds?: number, 
      MaxWaitTimeInSeconds?: number);
  readonly FixedRetryIntervalInMilliseconds: number;
  readonly MaxRetryAttemptCount: number;
  readonly MaxWaitTimeInSeconds: number;
}

// @public (undocumented)
class RuntimeExecutionTimes {
  constructor(queryEngineExecutionTime: TimeSpan, systemFunctionExecutionTime: TimeSpan, userDefinedFunctionExecutionTime: TimeSpan);
  add(...runtimeExecutionTimesArray: RuntimeExecutionTimes[]): RuntimeExecutionTimes;
  static createFromArray(runtimeExecutionTimesArray: RuntimeExecutionTimes[]): RuntimeExecutionTimes;
  static createFromDelimitedString(delimitedString: string): RuntimeExecutionTimes;
  // (undocumented)
  readonly queryEngineExecutionTime: TimeSpan;
  // (undocumented)
  readonly systemFunctionExecutionTime: TimeSpan;
  toDelimitedString(): string;
  // (undocumented)
  readonly userDefinedFunctionExecutionTime: TimeSpan;
  // (undocumented)
  static readonly zero: RuntimeExecutionTimes;
}

// @public
interface SqlParameter {
  name: string;
  value: string | number | boolean;
}

// @public
interface SqlQuerySpec {
  parameters?: SqlParameter[];
  query: string;
}

// @public
class StoredProcedure {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(container: Container, id: string, clientContext: ClientContext);
  // (undocumented)
  readonly container: Container;
  delete(options?: RequestOptions): Promise<StoredProcedureResponse>;
  // WARNING: The type "CosmosResponse" needs to be exported by the package (e.g. added to index.ts)
  execute(params?: any[], options?: RequestOptions): Promise<CosmosResponse<any, StoredProcedure>>;
  // (undocumented)
  readonly id: string;
  read(options?: RequestOptions): Promise<StoredProcedureResponse>;
  replace(body: StoredProcedureDefinition, options?: RequestOptions): Promise<StoredProcedureResponse>;
  readonly url: string;
}

// @public (undocumented)
interface StoredProcedureDefinition {
  body?: string | ((...inputs: any[]) => void);
  id?: string;
}

// @public (undocumented)
interface StoredProcedureResponse extends CosmosResponse<StoredProcedureDefinition & Resource, StoredProcedure> {
  sproc: StoredProcedure;
  storedProcedure: StoredProcedure;
}

// @public
class StoredProcedures {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(container: Container, clientContext: ClientContext);
  // (undocumented)
  readonly container: Container;
  create(body: StoredProcedureDefinition, options?: RequestOptions): Promise<StoredProcedureResponse>;
  query(query: SqlQuerySpec, options?: FeedOptions): QueryIterator<any>;
  readAll(options?: FeedOptions): QueryIterator<StoredProcedureDefinition & Resource>;
  upsert(body: StoredProcedureDefinition, options?: RequestOptions): Promise<StoredProcedureResponse>;
}

// @public
class TimeSpan {
  constructor(days: number, hours: number, minutes: number, seconds: number, milliseconds: number);
  // (undocumented)
  protected _ticks: number;
  add(ts: TimeSpan): TimeSpan;
  // (undocumented)
  static additionDoesOverflow(a: number, b: number): boolean;
  // (undocumented)
  static compare(t1: TimeSpan, t2: TimeSpan): 0 | 1 | -1;
  compareTo(value: TimeSpan): 0 | 1 | -1;
  // (undocumented)
  days(): number;
  duration(): TimeSpan;
  equals(value: TimeSpan): boolean;
  // (undocumented)
  static fromDays(value: number): TimeSpan;
  // (undocumented)
  static fromHours(value: number): TimeSpan;
  // (undocumented)
  static fromMilliseconds(value: number): TimeSpan;
  // (undocumented)
  static fromMinutes(value: number): TimeSpan;
  // (undocumented)
  static fromSeconds(value: number): TimeSpan;
  // (undocumented)
  static fromTicks(value: number): TimeSpan;
  // (undocumented)
  hours(): number;
  // (undocumented)
  static interval(value: number, scale: number): TimeSpan;
  // (undocumented)
  static isTimeSpan(timespan: TimeSpan): number;
  // (undocumented)
  static readonly maxValue: TimeSpan;
  // (undocumented)
  milliseconds(): number;
  // (undocumented)
  static readonly minValue: TimeSpan;
  negate(): TimeSpan;
  // (undocumented)
  seconds(): number;
  subtract(ts: TimeSpan): TimeSpan;
  // (undocumented)
  static subtractionDoesUnderflow(a: number, b: number): boolean;
  // (undocumented)
  ticks(): number;
  // (undocumented)
  totalDays(): number;
  // (undocumented)
  totalHours(): number;
  // (undocumented)
  totalMilliseconds(): number;
  // (undocumented)
  totalMinutes(): number;
  // (undocumented)
  totalSeconds(): number;
  // (undocumented)
  static readonly zero: TimeSpan;
}

// @public
class Trigger {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(container: Container, id: string, clientContext: ClientContext);
  // (undocumented)
  readonly container: Container;
  delete(options?: RequestOptions): Promise<TriggerResponse>;
  // (undocumented)
  readonly id: string;
  read(options?: RequestOptions): Promise<TriggerResponse>;
  replace(body: TriggerDefinition, options?: RequestOptions): Promise<TriggerResponse>;
  readonly url: string;
}

// @public (undocumented)
interface TriggerDefinition {
  body: (() => void) | string;
  id?: string;
  triggerOperation: TriggerOperation;
  triggerType: TriggerType;
}

// @public
enum TriggerOperation {
  All = "all",
  Create = "create",
  Delete = "delete",
  Replace = "replace",
  Update = "update"
}

// @public (undocumented)
interface TriggerResponse extends CosmosResponse<TriggerDefinition & Resource, Trigger> {
  trigger: Trigger;
}

// @public
class Triggers {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(container: Container, clientContext: ClientContext);
  // (undocumented)
  readonly container: Container;
  create(body: TriggerDefinition, options?: RequestOptions): Promise<TriggerResponse>;
  query(query: SqlQuerySpec, options?: FeedOptions): QueryIterator<any>;
  readAll(options?: FeedOptions): QueryIterator<TriggerDefinition & Resource>;
  upsert(body: TriggerDefinition, options?: RequestOptions): Promise<TriggerResponse>;
}

// @public
enum TriggerType {
  Post = "post",
  Pre = "pre"
}

// @public (undocumented)
class UriFactory {
  static createAttachmentUri(databaseId: string, collectionId: string, documentId: string, attachmentId: string): string;
  static createConflictUri(databaseId: string, collectionId: string, conflictId: string): string;
  static createDatabaseUri(databaseId: string): string;
  static createDocumentCollectionUri(databaseId: string, collectionId: string): string;
  static createDocumentUri(databaseId: string, collectionId: string, documentId: string): string;
  static createPartitionKeyRangesUri(databaseId: string, collectionId: string): string;
  static createPermissionUri(databaseId: string, userId: string, permissionId: string): string;
  static createStoredProcedureUri(databaseId: string, collectionId: string, storedProcedureId: string): string;
  static createTriggerUri(databaseId: string, collectionId: string, triggerId: string): string;
  static createUserDefinedFunctionUri(databaseId: string, collectionId: string, udfId: string): string;
  static createUserUri(databaseId: string, userId: string): string;
}

// @public
class User {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(database: Database, id: string, clientContext: ClientContext);
  // (undocumented)
  readonly database: Database;
  delete(options?: RequestOptions): Promise<UserResponse>;
  // (undocumented)
  readonly id: string;
  permission(id: string): Permission;
  readonly permissions: Permissions;
  read(options?: RequestOptions): Promise<UserResponse>;
  replace(body: UserDefinition, options?: RequestOptions): Promise<UserResponse>;
  readonly url: string;
}

// @public
class UserDefinedFunction {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(container: Container, id: string, clientContext: ClientContext);
  // (undocumented)
  readonly container: Container;
  // WARNING: Unable to find referenced export "@azure/cosmos#UserDefined"
  delete(options?: RequestOptions): Promise<UserDefinedFunctionResponse>;
  // (undocumented)
  readonly id: string;
  read(options?: RequestOptions): Promise<UserDefinedFunctionResponse>;
  replace(body: UserDefinedFunctionDefinition, options?: RequestOptions): Promise<UserDefinedFunctionResponse>;
  readonly url: string;
}

// @public (undocumented)
interface UserDefinedFunctionDefinition {
  body?: string | (() => void);
  id?: string;
}

// @public (undocumented)
interface UserDefinedFunctionResponse extends CosmosResponse<UserDefinedFunctionDefinition & Resource, UserDefinedFunction> {
  udf: UserDefinedFunction;
  userDefinedFunction: UserDefinedFunction;
}

// @public
class UserDefinedFunctions {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(container: Container, clientContext: ClientContext);
  // (undocumented)
  readonly container: Container;
  create(body: UserDefinedFunctionDefinition, options?: RequestOptions): Promise<UserDefinedFunctionResponse>;
  query(query: SqlQuerySpec, options?: FeedOptions): QueryIterator<any>;
  readAll(options?: FeedOptions): QueryIterator<UserDefinedFunctionDefinition & Resource>;
  upsert(body: UserDefinedFunctionDefinition, options?: RequestOptions): Promise<UserDefinedFunctionResponse>;
}

// @public
enum UserDefinedFunctionType {
  Javascript = "Javascript"
}

// @public (undocumented)
interface UserDefinition {
  id?: string;
}

// @public (undocumented)
interface UserResponse extends CosmosResponse<UserDefinition & Resource, User> {
  user: User;
}

// @public
class Users {
  // WARNING: The type "ClientContext" needs to be exported by the package (e.g. added to index.ts)
  constructor(database: Database, clientContext: ClientContext);
  create(body: UserDefinition, options?: RequestOptions): Promise<UserResponse>;
  // (undocumented)
  readonly database: Database;
  query(query: SqlQuerySpec, options?: FeedOptions): QueryIterator<any>;
  readAll(options?: FeedOptions): QueryIterator<UserDefinition & Resource>;
  upsert(body: UserDefinition, options?: RequestOptions): Promise<UserResponse>;
}

// WARNING: Unsupported export: PartitionKey
// WARNING: Unsupported export: Constants
// WARNING: Unsupported export: QueryMetricsConstants
// (No @packagedocumentation comment for this package)
