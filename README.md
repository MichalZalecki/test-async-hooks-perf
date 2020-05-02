# test-async-hooks-perf

Very simplistic synthetic benchmark to compare [performance](https://github.com/nodejs/benchmarking/issues/181) of setting Express request context and cls-hooked (async_hooks).

## Build & run

    yarn build
    node ./src/example1
    node ./src/example2

## Benchmark

**Express context (example1)**

    $ wrk -d 30 http://localhost:3000/hello
    Running 30s test @ http://localhost:3000/hello
      2 threads and 10 connections
      Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency   798.77us  402.65us  10.69ms   95.67%
        Req/Sec     6.61k   640.51     7.22k    96.01%
      396071 requests in 30.10s, 98.21MB read
    Requests/sec:  13158.10
    Transfer/sec:      3.26MB

**cls-hooked (example2)**

    Running 30s test @ http://localhost:3000/hello
      2 threads and 10 connections
      Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency   618.40us  312.55us  12.55ms   85.30%
        Req/Sec     8.41k     0.97k   15.16k    82.86%
      502692 requests in 30.10s, 124.65MB read
    Requests/sec:  16700.19
    Transfer/sec:      4.14MB

**Result**

21% decressed performance on MacBook Pro (15-inch, 2018) using Node v14.1.0. Don't take this number too serious. Just keep it mind that there's a correlation between performance and using async_hooks.
