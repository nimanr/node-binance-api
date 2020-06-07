const Binance = require( "./node-binance-api" );
const secret = require( "./.secret" );
( async () => {
  const binance = new Binance().options( {
    APIKEY: secret.apiKey,
    APISECRET: secret.apiSecret,
    test: true,
    hedgeMode: true,
  } );

  console.info( await binance.futuresBookTickerStream( 'BTCUSDT' , 
  ( input )=> { 
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write( `bid: ${input.bestBid} | ask: ${input.bestAsk}` ); 
  } 
  ) );
}
)();
