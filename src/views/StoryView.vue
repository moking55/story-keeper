<template>
  <div class="container">
    <MDBCard class="shadow" style="margin-top: 7em">
      <img
        src="https://konachan.net/jpeg/d49abcbfe67086b00521286b300f52db/Konachan.com%20-%20353334%20animal%20azur_lane%20bird%20book%20braids%20breasts%20cleavage%20couch%20gray_eyes%20gray_hair%20long_hair%20nekojira%20open_shirt%20pantyhose%20shirt%20skirt%20transparent.jpg"
        class="card-img-top"
        alt=""
      />
      <MDBCardBody class="p-5">
        <div class="category-title mb-3">
          <p class="text-info">
            <i class="fas fa-book-open fa-sm me-2"></i>Short Story
          </p>
        </div>
        <h2 class="story-title mb-3">หนีไปด้วยกันมั้ย</h2>
        <MDBCardText class="story-content">
          เคยอยากจะหนีไปที่ไหนไกลๆ หรือเปล่า ไปที่ไหนซักที่ ที่ไม่มีใครหาเจอ
          ไปยังที่ที่ปัญหาต่างๆ ที่รายล้อมรอบตัวตามไปไม่ถึง
          ลืมว่าตัวเองเคยเป็นใคร ปลดเปลื้องทุกภาระที่แบกเอาไว้
          แล้วไปใช้ชีวิตในแบบที่ตนเองต้องการ ไม่มีอะไรให้ต้องกังวลวุ่นวายใจ
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </div>
</template>
<script setup>
import { MDBCard, MDBCardBody, MDBCardText } from "mdb-vue-ui-kit";
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
