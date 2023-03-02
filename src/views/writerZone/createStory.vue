<template>
  <div class="container">
    <MDBCard>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="7"
            ><MDBInput
              class="mb-4"
              size="lg"
              label="ชื่อเรื่อง"
              v-model="storyTitle"
              type="text"
            />
          </MDBCol>
          <MDBCol md="5">
            <MDBInput
              class="mb-4"
              size="lg"
              label="Url หน้าปก"
              v-model="coverUrl"
              type="text"
            />
          </MDBCol>
        </MDBRow>

        <QuillEditor
          theme="snow"
          placeholder="เล่าหน่อยว่าวันนี้เป็นอย่างไรบ้าง"
          style="height: 300px"
          v-model:content="editorContent"
          ref="quillEditor"
          content="html"
          contentType="html"
        />
        <MDBBtn
          color="primary"
          class="w-100 mt-3"
          type="button"
          @click="saveContent"
          >{{ btnMessage }}</MDBBtn
        >
      </MDBCardBody>
    </MDBCard>
  </div>
</template>
<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import {
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBInput,
  MDBRow,
  MDBCol,
} from "mdb-vue-ui-kit";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { ref } from "vue";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "@firebase/app";
import { useRouter } from "vue-router";

const [editorContent, storyTitle, coverUrl] = [ref(""), ref(""), ref(null)];
const [isBtnLoad, btnMessage] = [ref(false), ref("สร้างเรื่องราวใหม่")];
const router = useRouter();

const db = getFirestore(initializeApp);

async function saveContent() {
  [isBtnLoad.value, btnMessage.value] = [true, "กำลังโหลด...."];
  const docRef = {
    storyTitle: storyTitle.value,
    coverUrl: coverUrl.value,
    editorContent: editorContent.value,
  };
  console.log(docRef);
  return addDoc(collection(db, "stories"), docRef)
    .then(() => {
      router.push("/");
    })
    .catch((error) => {
      console.log(error);
      [isBtnLoad.value, btnMessage.value] = [false, "สร้างเรื่องราวใหม่"];
      alert("Failed to save");
    });
}
</script>
<style scoped>
.card {
  margin-top: -8em;
}
</style>
