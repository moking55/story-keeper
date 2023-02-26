import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserCredentialsStore = defineStore("credentials", () => {
  const email = ref(null);
  const userID = ref(null);
  const displayName = ref(null);
  const emailVerified = ref(false);

  // used for logout
  function clearState() {
    [email.value, userID.value, emailVerified.value, displayName.value] = [
      null,
      null,
      null,
      null,
    ];
  }

  // store user credentials
  function storeUserCredentials(
    emailVal,
    userIDVal,
    displayNameVal,
    emailVerifiedVal
  ) {
    email.value = emailVal;
    userID.value = userIDVal;
    displayName.value = displayNameVal;
    emailVerified.value = emailVerifiedVal;
  }

  function getCurrentUserID() {
    return userID.value;
  }

  function isLoggedIn() {
    return email.value != null && userID.value != null;
  }

  return { clearState, storeUserCredentials, getCurrentUserID, isLoggedIn };
});
