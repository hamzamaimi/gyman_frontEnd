export const errorsDictionary: {[key: string]: string} = {
    'Email or password does not match.' : 'L\'email o la password non corrispondono',
    'Error in the provided token.' : 'Errore nell\' autenticazione, rieffettuare l\'accesso.',
    'Token not found.' : 'Errore nell\' autenticazione, rieffettuare l\'accesso.',
    'Error during registration.' : 'Si è verificato un errore durante la registrazione, contattare l\'amministratore di sistema.',
    'The password should be at least 8 characters, one uppercase and one special character.' : 'La password deve essere di almeno 8 caratteri, un carattere maiuscolo e uno speciale.',
    'The account is blocked. You have to restore the password.' : 'l\'account è stato bloccato. Perfavore reimpostare la password.',
    'The account has been blocked. Check the email you\'ve received.' : 'l\'account è stato bloccato. Consulta l\'email che ti è stata spedita.',
    'Wait some hours between password reset requests.' : 'Hai già richiesto un reset della password. Aspetta qualche ora prima di richiederlo.'
}

export const successMessagesDictionary: {[key: string]: string} = {
    'Admin user created successfully.': 'L\'utente di tipo admin è stato creato con successo.',
    'User created successfully.': 'L\'utente è stato creato con successo.',
    'If an account with this email exists, a temporary password will be sent.': 'Se esiste un account associato a questa email, verrà inviata una password temporanea.',
    'You have correctly changed your password.': 'La password è stata correttamente aggiornata.',
}

export const serverError = 'Si è manifestato un errore del server. Riprovare fra qualche ora o contattere un amministratore di sistema.';