class TestDruidQuery {
  public static VALID_QUERY =
    '{"context":{"dataSource":"telemetry-events"},"query":{"queryType":"timeseries","dataSource":"telemetry-events","aggregations":[{"type":"count","name":"count"}],"granularity":"all","postAggregations":[],"intervals": "2021-02-19T00:00:00+00:00/2021-02-20T00:00:00+00:00"}}';
  public static HIGH_DATE_RANGE_GIVEN_AS_LIST =
    '{"context":{"dataSource":"telemetry-events"},"query":{"queryType":"groupBy","dataSource":"telemetry-events","dimensions":["actor_type","content_framework"],"limit":15, "metric":"count","granularity":"all","intervals":["2021-01-02/2021-02-05"],"aggregations":[{"type":"count","name":"count"}]}}';
  public static HIGH_DATE_RANGE_GIVEN_AS_STRING =
    '{"context":{"dataSource":"telemetry-events"},"query":{"queryType":"topN","dataSource":"telemetry-events","dimension":"actor_id","threshold":10,"metric":"count","granularity":"all","intervals":"2020-12-30/2021-02-02","aggregations":[{"type":"count","name":"count"}]}}';
  public static HIGH_THRESHOLD_QUERY =
    '{"context":{"dataSource":"telemetry-events"},"query":{"queryType":"scan","dataSource":"telemetry-events","dimension":"mid","threshold":1000,"metric":"count","granularity":"all","intervals":["2020-12-31/2021-01-01"],"aggregations":[]}}';
  public static HIGH_LIMIT_QUERY =
    '{"context":{"dataSource":"telemetry-events"},"query":{"queryType":"scan","dataSource":"telemetry-events","granularity":"all","intervals":["2020-12-21/2021-01-01"],"resultFormat":"compactedList","limit":1000,"columns":["actor_id", "mid"],"metrics":{"type":"numeric","metric":"count"},"aggregations":[{"type":"count","name":"count"}]}}';
  public static WITHOUT_THRESOLD_QUERY =
    '{"context":{"dataSource":"telemetry-events"},"query":{"queryType":"timeBoundary","dataSource":"telemetry-events","dimension":"content_status","metric":"count","granularity":"all","intervals":["2020-12-21/2020-12-22"],"aggregations":[]}}';
  public static WITHOUT_DATE_RANGE_QUERY =
    '{"context":{"dataSource":"telemetry-events"},"query":{"queryType":"search","dataSource":"telemetry-events","granularity":"all","resultFormat":"compactedList","columns":["__time"],"metrics":{"type":"numeric","metric":"count"},"aggregations":[{"type":"count","name":"count"}]}}';
  public static UNSUPPORTED_DATA_SOURCE =
    '{"context":{"dataSource":"invalid_data_source"},"query":{"queryType":"timeBoundary","dataSource":"invalid_data_source","granularity":"all","intervals":["2022-10-17/2022-10-19"],"resultFormat":"compactedList","columns":["__time","scans"],"metrics":{"type":"numeric","metric":"count"},"aggregations":[{"type":"count","name":"count"}]}}';
  public static INVALID_QUERY_TYPE = 
    '{"context":{"dataSource":"telemetry-events"},"query":{"queryType":"invalidQueryType", "dataSource":"telemetry-events", "granularity":"all", "intervals":"2021-12-31/2022-01-20"}}';
    public static UNSUPPORTED_SCHEMA = 
    '{"context":{},"query":{"queryType":"invalidQueryType", "dataSource":"telemetry-events", "granularity":"all", "intervals":"2021-12-31/2022-01-20"}}';
  public static VALID_SQL_QUERY =
    '{"context":{"dataSource":"telemetry-events"},"querySql":"SELECT * FROM \\"telemetry-events\\" WHERE __time >= TIMESTAMP \'2020-12-31\' AND __time < TIMESTAMP \'2021-01-21\' LIMIT 10"}';
  public static HIGH_LIMIT_SQL_QUERY =
    '{"context":{"dataSource":"telemetry-events"},"querySql":"SELECT mid FROM \\"telemetry-events\\" WHERE __time >= TIMESTAMP \'2021-01-01\' AND __time < TIMESTAMP \'2021-01-22\' LIMIT 1000"}';
  public static WITHOUT_LIMIT_SQL_QUERY =
    '{"context":{"dataSource":"telemetry-events"},"querySql":"SELECT actor_type, content_status FROM \\"telemetry-events\\" WHERE __time >= TIMESTAMP \'2021-01-01\' AND __time < TIMESTAMP \'2021-01-02\'"}';
  public static HIGH_DATE_RANGE_SQL_QUERY =
    '{"context":{"dataSource":"telemetry-events"},"querySql":"SELECT actor_type, content_status FROM \\"telemetry-events\\" WHERE __time >= TIMESTAMP \'2021-01-01\' AND __time < TIMESTAMP \'2021-02-12\' LIMIT 10"}';
  public static WITHOUT_DATE_RANGE_SQL_QUERY =
    '{"context":{"dataSource":"telemetry-events"},"querySql":"SELECT content_status FROM \\"telemetry-events\\" LIMIT 5"}';
  public static UNSUPPORTED_DATASOURCE_SQL_QUERY =
    '{"context":{"dataSource":"telemetry-events"},"querySql":"SELECT __time FROM \\"invalid-datasource\\" LIMIT 10"}';
}

export default TestDruidQuery;
