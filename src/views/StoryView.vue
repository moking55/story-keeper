<template>
  <div class="container">
    <MDBCard class="shadow" style="margin-top: 7em" v-if="data">
      <img
        :src="data.coverUrl ? data.coverUrl : ContentCardbg"
        class="card-img-top"
        alt="cover image"
      />
      <MDBCardBody class="p-5">
        <div class="category-title mb-3">
          <p class="text-info">
            <i class="fas fa-book-open fa-sm me-2"></i>Short Story
          </p>
        </div>
        <h2 class="story-title mb-3">{{ data.storyTitle }}</h2>
        <MDBCardText class="story-content" v-html="data.editorContent">
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </div>
</template>
<script setup>
import { MDBCard, MDBCardBody, MDBCardText } from "mdb-vue-ui-kit";
import { computed, onBeforeMount, ref } from "vue";
import { useDocument } from "vuefire";
import { collection, doc, getFirestore } from "firebase/firestore";
import { initializeApp } from "@firebase/app";
import { useRoute } from "vue-router";
import ContentCardbg from "@/assets/content_bg.png";

const route = useRoute();
const db = getFirestore(initializeApp);
const storyId = route.params.storyId;
const data = ref();
onBeforeMount(async () => {
  const processing = computed(() => doc(collection(db, "stories"), storyId));
  data.value = useDocument(processing);
});
</script>
<style scoped>
.card-img-top {
  height: 260px;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.card-body {
  font-family: "Sarabun", sans-serif;
}

.story-title {
  letter-spacing: 0.12em;
}
.story-content {
  letter-spacing: 0.09em;
  font-weight: 300;
  font-size: 14pt;
}
</style>
