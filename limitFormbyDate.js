function closeForm() {

const waktuCloseForm = new Date('January 03, 2025 15:23:59');
let waktuSekarang = new Date();

const idForm = 'idGoogleFormMu';

const formApp = FormApp.openById(idForm)

function deleteTriggers(){
  const triggers = ScriptApp.getProjectTriggers();

  for (const i = 0; i < triggers.length; i++){

    ScriptApp.deleteTrigger(triggers[i]);
  }
  Logger.log('triger sudah didelete')
}

if(waktuSekarang >= waktuCloseForm) {
  
  formApp.setAcceptingResponses(false);
  Logger.log('Form sudah ditutup cuy.')

  return deleteTriggers();
} else {
  formApp.setAcceptingResponses(true);
  Logger.log('Form masih buka cuy')
}

}

// set triger by time jangan lupa
