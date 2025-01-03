function submitForm(){
  data_array = [];
const idForm = 'formidmu'
  var formId = FormApp.openById(idForm);
  var formResponses = formId.getResponses();
  var lastResponse = formResponses.length;
  var formTitle = formId.getTitle();

  var formResponse = formResponses [lastResponse - 1]; //get form response from google form target
  var itemResponses = formResponse.getItemResponses(); //get item response dari atasnya inih

  // tentukan logic pengulangan buat looping kalo ada form masuknya
  for (var i = 0; i < itemResponses.length; i++){
    //tentukan itemnya isinya mau apa ajaa
    var itemResponse = itemResponses[i];
    //get title form google from aja biar gampang
    var titleForm = itemResponse.getItem().getTitle();
    //print jawabannnya dari penginput
    var jawaban = itemResponse.getResponse();

    Logger.log(titleForm);
    Logger.log(jawaban);

    data_array.push(jawaban);
  }

  var isiEmail = "Halo <b>"+ data_array[0] + ",</b> \n"+
  "Lamaran Anda untuk posisi <b>"+ formTitle + "</b> berhasil kami terima.\n"+
  "Mohon menunggu, untuk proses selanjutnya. Demikian pemberitahuan kami sampaikan.\n<b>Hati hati terhadap penipuan yang mengatas namakan RS Meilia</b>\n\n"+
  "Hormat kami:\n<b>HR RS Meilia</b>\n<i>Serve with H.E.A.R.T</i>\nJl. Alternatif Cibubur KM. 1 - Depok\nTelp: 021-8444 444"

  MailApp.sendEmail(
    data_array[6],
    formTitle + " : "+ data_array[0],
    isiEmail,
    {htmlBody: isiEmail.replace(/\n/g, '<br>')}
  )
}
