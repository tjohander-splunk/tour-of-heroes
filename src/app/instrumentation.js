import SplunkOtelWeb from '@splunk/otel-web';

SplunkOtelWeb.init({
    beaconUrl: "https://rum-ingest.us1.signalfx.com/v1/rum",
    rumAuth: "SrogTtpS5Y8GKuahuLTX7w",
    app: "tour-of-heroes",
    environment: "tj-devlab"
});