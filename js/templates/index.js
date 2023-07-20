function getTemplate(templateName) {
  console.log(templateName);
  if (templateName === REGISTRATION) {
    return getRegistrationTemplate();
  }

  if (templateName === AUTH) {
    return getAuthTemplate();
  }

  if (templateName === CREATE_ROOM) {
    return getCreateRoomTemplate();
  }

  if (templateName === FOR_INVITED) {
    return getForInvitedTemplate();
  }

  if (templateName === PRESENTATION) {
    return getPresentationTemplate();
  }

  return getStartTemplate();
}
