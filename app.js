const yargs = require('yargs');
const finData = require('./api_queries/fetching_data.js');

const ticker = {
  describe: 'Stock ticker.',
  demand:true,
  alias:'t',
};
// const bodyOptions = {
//   describe:'update',
//   demand:false,
//   alias:'u'
// };
const argv = yargs
  .command('getOne','Get one stocks financials',{
    title:ticker
   })
   .command('u','Update all stocks financials')
  // .command('read','Read a note',{
  //   title:titleOptions
  //   })
  // .command('remove','Remove a note',{
  //   title:titleOptions
  //   })
  .help()
  .argv;

  var command = argv._[0];// take the Command using the yargs parsed chain

if(command=='u'){
    let data = [
      'aapl','googl','amzn'
    ];
    finData.getAll(data, (errorMessage,results)=> {
      if(errorMessage){
        console.log(errorMessage);
      }else{
        console.log(results);
      }
    });

}else if (command == 'getOne'){
   //encodeURIComponent(argv.a) codifica a formato uri
   //decodeURIComponent(argv.a) decodifica a formato string
    finData.getFinancials(encodeURIComponent(argv.t), (errorMessage,results)=> {
      if(errorMessage){
        console.log(errorMessage);
      }else{
        console.log(results);
        console.log("entro");
      }
    });

 }//else if (command == 'read'){
//   var note = notes.getNote(argv.title);
//   if(note){
//     console.log('Note found');
//     notes.logNote(note);
//   }else{
//     console.log('Note not found');
//   }
// }else if (command == 'remove'){
//   var notesRemoved = notes.removeNote(argv.title);
//   var message = notesRemoved ? 'Note was removed' : 'Note not found';
//   console.log(message);
// }else{
//   console.log('Command not recognized');
// }

// const argv = yargs
//   .options({
//       t:{
//         demand:false,
//         alias:'ticker',
//         describe:'ticker to fetch financial data for',
//         string:true
//       }
//   })
//   .help()
//   .alias('help','h')
//   .argv;
