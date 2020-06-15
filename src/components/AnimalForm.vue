<template>
  <form class="anForm" action="/addAnimal" method="post"
        name="contact_form" enctype="multipart/form-data">
    <div class="anFormWindow">
      <div class="newAn_left">
        <ul>
          <li class="anName req-input">
            <label>Имя питомца:</label>
            <input type="text" id="anName" name="anName" autocorrect="off" autocomplete="anName"
                   placeholder="Эйнштейн" required/>
            <span>*обязательное поле</span>
          </li>
          <li class="anKind req-input">
            <label for="anKind">Вид питомца:</label>
            <input type="text" id="anKind" name="anKind" autocorrect="off" autocomplete="anKind"
                   placeholder="Пес" required/>
            <span>*обязательное поле</span>
          </li>
          <li class="anAge opt-input">
            <label for="anAge">Возраст питомца:</label>
            <input type="text" id="anAge" name="anAge" autocorrect="off" autocomplete="anAge"
                   placeholder="3 года"/>
            <span>*опционально</span>
          </li>
          <li class="anCharacter opt-input">
            <label for="anCharacter">Характер:</label>
            <input type="text" id="anCharacter" name="anCharacter" autocorrect="off"
                   autocomplete="anCharacter" placeholder="Спокойный"/>
            <span>*опционально</span>
          </li>
          <li class="anHear opt-input">
            <label for="anHear">Шерсть:</label>
            <input type="text" id="anHear" name="anHear" autocorrect="off" autocomplete="anHear"
                   placeholder="Полудлинношерстная"/>
            <span>*опционально</span>
          </li>
          <li class="anColor opt-input">
            <label for="anColor">Окраска:</label>
            <input type="text" id="anColor" name="anColor" autocorrect="off" autocomplete="anColor"
                   placeholder="Черная, Белая"/>
            <span>*опционально</span>
          </li>
          <li class="anBreed opt-input">
            <label for="anBreed">Порода:</label>
            <input type="text" id="anBreed" name="anBreed" autocorrect="off" autocomplete="anBreed"
                   placeholder="Албанский двортерьер"/>
            <span>*опционально</span>
          </li>
          <li>
            <label>Пол питомца:</label>
            <div class="newAn-choose">
              <input type="radio" name="anSex" id="newAn-choose-male"
                     class="newAn-choose-button" value="Мужской"
                     required>
              <label class="newAn-choose-label" for="newAn-choose-male">Мужской</label>
              <input type="radio" name="anSex" id="newAn-choose-female" class="newAn-choose-button"
                     value="Женский" required>
              <label class="newAn-choose-label" for="newAn-choose-female">Женский</label>
            </div>
            <span>*обязательное поле</span>
          </li>
          <li>
            <label>Стерилизация:</label>
            <div class="newAn-choose">
              <input type="radio" name="anSterilization" id="newAn-choose-sterilizationTrue"
                     class="newAn-choose-button" value="true">
              <label class="newAn-choose-label" for="newAn-choose-sterilizationTrue">Есть</label>
              <input type="radio" name="anSterilization" id="newAn-choose-sterilizationFalse"
                     class="newAn-choose-button" value="false">
              <label class="newAn-choose-label" for="newAn-choose-sterilizationFalse">Нет</label>
            </div>
            <span>*опционально</span>
          </li>
          <li>
            <label>Вакцинация:</label>
            <div class="newAn-choose">
              <input type="radio" name="anVaccination" id="newAn-choose-vaccinationTrue"
                     class="newAn-choose-button" value="true">
              <label class="newAn-choose-label" for="newAn-choose-vaccinationTrue">Есть</label>
              <input type="radio" name="anVaccination" id="newAn-choose-vaccinationFalse"
                     class="newAn-choose-button" value="false">
              <label class="newAn-choose-label" for="newAn-choose-vaccinationFalse">Нет</label>
            </div>
            <span>*опционально</span>
          </li>
          <li class="anRegion opt-input">
            <label for="anRegion">Регион:</label>
            <input type="text" id="anRegion" name="anRegion" autocorrect="off"
                   autocomplete="anRegion"
                   placeholder="Курск"/>
            <span>*опционально</span>
          </li>
          <li class="anAdress opt-input">
            <label for="anAdress">Адрес:</label>
            <input type="text" id="anAdress" name="anAdress" autocorrect="off"
                   autocomplete="anAdress"
                   placeholder="ул. Ленина, 48"/>
            <span>*опционально</span>
          </li>
          <li class="anStatus opt-input">
            <label for="anStatus">Статус:</label>
            <input type="text" id="anStatus" name="anStatus" autocorrect="off"
                   autocomplete="anStatus"
                   placeholder="На передержке"/>
            <span>*опционально</span>
          </li>
          <li class="anShortMessage req-text">
            <label for="anShortMessage">Краткое описание питомца:</label>
            <textarea id="anShortMessage" name="anShortMessage" cols="40" rows="7"
                      required></textarea>
            <span>*обязательное поле</span>
          </li>
          <li class="anMessage req-text">
            <label for="anMessage">Полное описание питомца:</label>
            <textarea id="anMessage" name="anMessage" cols="40" rows="18" required></textarea>
            <span>*обязательное поле</span>
          </li>
        </ul>
      </div>
      <div class="newAn-right">
        <img width=100% src="../assets/images/wanted11.png">
        <ul>
          <li>
            <label>Добавить в категорию:</label>
            <div class="newAn-category">
              <label>
                <input type="radio" class="option-input radio" name="anCategory"
                       value="Ищут дом">
                Ищут дом
              </label>
              <label>
                <input type="radio" class="option-input radio" name="anCategory"
                       value="Нуждаются в лечении">
                Нуждаются в лечении
              </label>
              <label>
                <input type="radio" class="option-input radio" name="anCategory"
                       value="Разыскиваются">
                Разыскиваются
              </label>
              <label>
                <input type="checkbox" class="option-input checkbox" name="needOverexposure"
                       value="true">
                Нуждаются в передержке
              </label>
            </div>
          <li>
            <label>Приоритет объявления:</label>
            <div class="newAn-priority">
              <label>
                <input type="radio" class="option-input radio" name="anPriority"
                       v-model="anPriority"
                       value="Низкий" required/>
                Низкий
              </label>
              <label>
                <input type="radio" class="option-input radio" name="anPriority"
                       v-model="anPriority"
                       value="Стандартный" required checked/>
                Стандартный
              </label>
              <label>
                <input type="radio" class="option-input radio" name="anPriority"
                       v-model="anPriority"
                       value="Высокий" required/>
                Высокий
              </label>
              <label>
                <input type="radio" class="option-input radio" name="anPriority"
                       v-model="anPriority"
                       value="Максимальный" required/>
                Максимальный
              </label>
            </div>
          </li>
          <li class="newAn-priorityDescription req-text"
              v-if="(anPriority=='Высокий')||(anPriority=='Максимальный')">
            <label for="newAn-priorityDescription">Коментарий с пояснением для модератора:</label>
            <textarea id="newAn-priorityDescription" name="priorityDescription" cols="40" rows="7"
                      required></textarea>
            <div class="form-hint">Пожалуйста прокоментируйте</div>
            <span>*обязательное поле</span>
          </li>
          <li class="anContactName req-input">
            <label for="anContactName">Контактное лицо:</label>
            <input type="text" id="anContactName" name="anContactName" autocorrect="off"
                   autocomplete="anContactName" placeholder="Антон" required/>
            <span>*обязательное поле</span>
          </li>
          <li class="anContactEmail req-input">
            <label for="anContactEmail">Контактный e-mail:</label>
            <input type="email" id="anContactEmail" name="anContactEmail" autocorrect="off"
                   autocomplete="anContactEmail"
                   placeholder="anton_gorodetskiy@example.com" required/>
            <div class="form-hint">Формат: "name@something.com"</div>
            <span>*обязательное поле</span>
          </li>
          <li class="anContactTel opt-input">
            <label for="anContactTel">Контактный телефон:</label>
            <input type="tel" id="anContactTel" name="anContactTel" autocorrect="off"
                   autocomplete="anContactTel" placeholder="+79091234567"/>
            <div class="form-hint">Формат: "+7xxxxxxxxxx"</div>
            <span>*опционально</span>
          </li>
          <li class="anContactSoc opt-input">
            <label for="anContactSoc">Контактный профиль в соц.сети:</label>
            <input type="url" id="anContactSoc" name="anContactSoc" autocorrect="off"
                   autocomplete="anContactSoc" placeholder="https://vk.com/anton_gorodetskiy"
                   pattern="(http|https)://.+"/>
            <div class="form-hint">Формат: "https://someaddress.com/some_login"</div>
            <span>*опционально</span>
          </li>
          <li class="anContactName2 opt-input">
            <label for="anContactName2">Контактное лицо-2:</label>
            <input type="text" id="anContactName2" name="anContactName2" autocorrect="off"
                   autocomplete="anContactName2" placeholder="Ульяна"/>
            <span>*опционально</span>
          </li>
          <li class="anContactEmail2 opt-input">
            <label for="anContactEmail2">Контактный e-mail-2:</label>
            <input type="email" id="anContactEmail2" name="anContactEmail2" autocorrect="off"
                   autocomplete="anContactEmail2" placeholder="ulyana_orlova@example.com"/>
            <div class="form-hint">Формат: "name@something.com"</div>
            <span>*опционально</span>
          </li>
          <li class="anContactTel2 opt-input">
            <label for="anContactTel2">Контактный телефон-2:</label>
            <input type="tel" id="anContactTel2" name="anContactTel2" autocorrect="off"
                   autocomplete="anContactTel2" placeholder="+79097654321"/>
            <div class="form-hint">Формат "+7xxxxxxxxxx"</div>
            <span>*опционально</span>
          </li>
          <li class="anContactSoc2 opt-input">
            <label for="anContactSoc2">Контактный профиль в соц.сети-2:</label>
            <input type="url" id="anContactSoc2" name="anContactSoc2" autocorrect="off"
                   autocomplete="anContactSoc2" placeholder="https://vk.com/ulyana_orlova"
                   pattern="(http|https)://.+"/>
            <div class="form-hint">Используйте формат "https://someaddress.com/some_login"</div>
            <span>*опционально</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="anUploadBox">
      <div class="anUploadPhoto1">
        <div class="photo-box-1">
          <picture-input
            name="uploadPhotos"
            :custom-strings="{
              upload: '<p>Your device does not support file uploading.</p>',
              drag: '😺 <br>Загрузите аватар<br> (реком. формат 9x5)',
              tap: 'Tap here to select a photo <br>from your gallery',
              change: 'Заменить',
              remove: 'Удалить',
              select: 'Выбрать фото',
              selected: '<p>Photo successfully selected!</p>',
              fileSize: 'Размер изображения должен быть не более 1Мб',
              fileType: 'Загрузите изображение в формате jpg. В случае,' +
              ' если формат изображения не совпадает, воспользуйтесь сервисом онлайн конвертации.',
              aspect: 'Landscape/Portrait'
              }"
            :prefillOptions="{
              fileName: '1.jpg',
              fileType: 'jpg',
              mediaType: 'image/jpg'
               }"
            ref="pictureInput"
            width="540"
            height="300"
            margin="16"
            accept="image/jpeg"
            size="10"
            button-class="btn"
            :z-index="0"
          >
          </picture-input>
        </div>
      </div>
      <div class="anUploadPhoto2" v-if="photoNumber>1">
        <div class="photo-box">
          <picture-input
            name="uploadPhotos"
            :custom-strings="{
              upload: '<p>Your device does not support file uploading.</p>',
              drag: '😺 <br>Загрузите доп. фото<br> (рекомендуемый формат 1x1)',
              tap: 'Tap here to select a photo <br>from your gallery',
              change: 'Заменить',
              remove: 'Удалить',
              select: 'Выбрать фото',
              selected: '<p>Photo successfully selected!</p>',
              fileSize: 'Размер изображения должен быть не более 1Мб',
              fileType: 'Загрузите изображение в формате jpg. В случае, если' +
              ' формат изображения не совпадает, воспользуйтесь сервисом онлайн конвертации.',
              aspect: 'Landscape/Portrait'
              }"
            :prefillOptions="{
                                fileName: '2.jpg',
                                fileType: 'jpg',
                                mediaType: 'image/jpg'
                              }"
            ref="pictureInput"
            width="300"
            height="300"
            margin="16"
            accept="image/jpeg"
            size="10"
            button-class="btn"
            :z-index="0"
          >
          </picture-input>
        </div>
      </div>
      <div class="anUploadPhoto3" v-if="photoNumber>2">
        <div class="photo-box">
          <picture-input
            name="uploadPhotos"
            :custom-strings="{
              upload: '<p>Your device does not support file uploading.</p>',
              drag: '😺 <br>Загрузите доп. фото<br> (рекомендуемый формат 1x1)',
              tap: 'Tap here to select a photo <br>from your gallery',
              change: 'Заменить',
              remove: 'Удалить',
              select: 'Выбрать фото',
              selected: '<p>Photo successfully selected!</p>',
              fileSize: 'Размер изображения должен быть не более 1Мб',
              fileType: 'Загрузите изображение в формате jpg. В случае, если' +
              ' формат изображения не совпадает, воспользуйтесь сервисом онлайн конвертации.',
              aspect: 'Landscape/Portrait'
              }"
            :prefillOptions="{
              fileName: '3.jpg',
              fileType: 'jpg',
              mediaType: 'image/jpg'
              }"
            ref="pictureInput"
            width="300"
            height="300"
            margin="16"
            accept="image/jpeg"
            size="10"
            button-class="btn"
            :z-index="0"
          >
          </picture-input>
        </div>
      </div>
      <div class="anUploadPhoto4" v-if="photoNumber>3">
        <div class="photo-box">
          <picture-input
            name="uploadPhotos"
            :custom-strings="{
              upload: '<p>Your device does not support file uploading.</p>',
              drag: '😺 <br>Загрузите доп. фото<br> (рекомендуемый формат 1x1)',
              tap: 'Tap here to select a photo <br>from your gallery',
              change: 'Заменить',
              remove: 'Удалить',
              select: 'Выбрать фото',
              selected: '<p>Photo successfully selected!</p>',
              fileSize: 'Размер изображения должен быть не более 1Мб',
              fileType: 'Загрузите изображение в формате jpg. В случае, если' +
              ' формат изображения не совпадает, воспользуйтесь сервисом онлайн конвертации.',
              aspect: 'Landscape/Portrait'
              }"
            :prefillOptions="{
              fileName: '4.jpg',
              fileType: 'jpg',
              mediaType: 'image/jpg'
              }"
            ref="pictureInput"
            width="300"
            height="300"
            margin="16"
            accept="image/jpeg"
            size="10"
            button-class="btn"
            :z-index="0"
          >
          </picture-input>
        </div>
      </div>
      <div class="pictureInput-button">
        <button class="pictureInput-button-plus" type="button" v-bind:disabled="photoNumber>3"
                v-bind:class="[photoNumber<4 ? pictureInputOn : '']" v-on:click="photoNumber++">
          <img v-if="photoNumber<4" src="../assets/images/plus-button.svg" width="50px">
          <img v-if="photoNumber>=4" src="../assets/images/plus-button-disabled.svg" width="50px">
        </button>
        <button class="pictureInput-button-minus" type="button" v-bind:disabled="photoNumber<2"
                v-bind:class="[photoNumber>1 ? pictureInputOn : '']" v-on:click="photoNumber--">
          <img v-if="photoNumber>1" src="../assets/images/minus-button.svg" width="50px">
          <img v-if="photoNumber<=1" src="../assets/images/minus-button-disabled.svg" width="50px">
        </button>
      </div>
    </div>
    <button class="form-button" type="submit">
      <div class="form-button-label">
        Зарегистрировать
      </div>
    </button>
  </form>
</template>

<script>
import PictureInput from 'vue-picture-input';

export default {
  name: 'AnimalForm',
  data() {
    return {
      photoNumber: 1,
      anPriority: 'Стандартный',
      pictureInputOn: 'pictureInput-on',
    };
  },
  components: { PictureInput },
  props: {},
  computed: {},
  methods: {
  },
  created() {
  },
  mounted() {
  },
  beforeDestroy() {
  },
  destroyed() {
  },
};
</script>

<style scoped>
  .newAn_left {
    display: flex;
    width: 650px;
    flex-direction: column;
  }

  *:focus {
    outline: none;
  }

  .form-hint {
    font-size: 11px;
  }

  .anForm {
    display: flex;
    min-width: 1180px;
    flex-direction: column;
    align-items: center;
  }

  .anFormWindow {
    display: flex;
    flex-direction: row;
  }

  .anFormWindow ul {
    width: 600px;
    margin: 0px;
    padding: 0px;
  }

  .anFormWindow li {
    display: flex;
    width: 550px;
    flex-direction: column;
    padding: 12px 0px;
    border-bottom: 2px solid #fff;
    position: relative;
  }

  .anFormWindow span {
    font-size: 11px;
    color: #555;
  }

  .anName label, .anKind label, .anAge label, .anСharacter label, .anHear label,
  .anColor label, .anBreed label, .anRegion label, .anAdress label, .anStatus label,
  .anShortMessage label, .anMessage label, .anContactName label, .anContactEmail label,
  .anContactTel label, .anContactSoc label, .anContactName2 label, .anContactEmail2 label,
  .anContactTel2 label, .anContactSoc2 label {
    width: 550px;
    margin-top: 3px;
    display: inline-block;
    float: left;
    padding: 3px;
  }

  .req-input input {
    height: 50px;
    width: 550px;
    padding: 5px 8px;
    background: #fff;
    box-shadow: 0 0 5px #d933de;
    border: 1px solid #8822d7;
    border-radius: 2px;
    padding-right: 30px;
    -moz-transition: padding .25s;
    -webkit-transition: padding .25s;
    -o-transition: padding .25s;
    transition: padding .25s;
  }

  .opt-input input {
    height: 50px;
    width: 550px;
    padding: 5px 8px;
    border: 1px solid #aaa;
    box-shadow: 0px 0px 3px #ccc, 0 10px 15px #eee inset;
    border-radius: 2px;
    padding-right: 30px;
    -moz-transition: padding .25s;
    -webkit-transition: padding .25s;
    -o-transition: padding .25s;
    transition: padding .25s;
  }

  .req-text textarea {
    padding: 8px 30px 8px 8px;
    width: 550px;
    background: #fff;
    box-shadow: 0 0 5px #d933de;
    border: 1px solid #8822d7;
    border-radius: 2px;
    -moz-transition: padding .25s;
    -webkit-transition: padding .25s;
    -o-transition: padding .25s;
    transition: padding .25s;
  }

  .req-input input:focus {
    background: #fff;
    border: 1px solid #555;
    box-shadow: 0 0 3px #aaa;
    padding-right: 70px;
  }

  .opt-input input:focus {
    background: #fff;
    border: 1px solid #555;
    box-shadow: 0 0 3px #aaa;
    padding-right: 70px;
  }

  .req-text textarea:focus {
    background: #fff;
    border: 1px solid #555;
    box-shadow: 0 0 3px #aaa;
    padding-right: 70px;
  }

  .opt-input input:valid:placeholder-shown, .req-input input:valid:placeholder-shown,
  .req-text textarea:valid:placeholder-shown {
    background: #fff;
    box-shadow: 0 0 5px #33d9de;
    border-color: #6ab1d7;
  }

  .opt-input input:valid, .req-input input:valid, .req-text textarea:valid {
    background: #fff url(../assets/images/valid.png) no-repeat 98% center;
    box-shadow: 0 0 5px #5cd053;
    border-color: #28921f;
  }

  .newAn-choose {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .newAn-choose-button {
    display: none;
  }

  .newAn-choose-label {
    position: relative;
    width: 250px;
    min-height: 120px;
    background-color: #888;
    font-size: 26px;
    text-align: center;
    line-height: 120px;
    color: #fff;
    cursor: pointer;
    border: 3px solid transparent;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .newAn-choose-button:checked + .newAn-choose-label {
    border: 3px solid #333;
    background-color: #40e0d0;;
  }

  .newAn-choose-button:checked + .newAn-choose-label:after {
    content: "\2713";
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 100%;
    border: 2px solid #333;
    background-color: #40e0d0;;
    z-index: 9;
    position: absolute;
    top: -10px;
    right: -10px;
  }

  @-webkit-keyframes click-wave {
    0% {
      height: 40px;
      width: 40px;
      opacity: 0.35;
      position: relative;
    }
    100% {
      height: 200px;
      width: 200px;
      margin-left: -80px;
      margin-top: -80px;
      opacity: 0;
    }
  }

  @-moz-keyframes click-wave {
    0% {
      height: 40px;
      width: 40px;
      opacity: 0.35;
      position: relative;
    }
    100% {
      height: 200px;
      width: 200px;
      margin-left: -80px;
      margin-top: -80px;
      opacity: 0;
    }
  }

  @keyframes click-wave {
    0% {
      height: 40px;
      width: 40px;
      opacity: 0.35;
      position: relative;
    }
    100% {
      height: 200px;
      width: 200px;
      margin-left: -80px;
      margin-top: -80px;
      opacity: 0;
    }
  }

  .newAn-category {
    display: flex;
    flex-direction: column;
    margin-bottom: 3px;
  }

  .newAn-priority {
    display: flex;
    flex-direction: column;
    margin-bottom: 9px;
  }

  .option-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    position: relative;
    top: 13px;
    right: 0;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 40px;
    -webkit-transition: all 0.15s ease-out 0s;
    -moz-transition: all 0.15s ease-out 0s;
    transition: all 0.15s ease-out 0s;
    background: #eee;
    border: none;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    margin-right: 0.5rem;
    outline: none;
    position: relative;
    z-index: 9;
  }

  .option-input.radio {
    border-radius: 50%;
  }

  .option-input.radio::after {
    border-radius: 50%;
  }

  .option-input:hover {
    background: #9faab7;
  }

  .option-input:checked {
    background: #40e0d0;
  }

  .option-input:checked::before {
    height: 40px;
    width: 40px;
    position: absolute;
    content: '\2716';
    display: inline-block;
    font-size: 26.6666666667px;
    text-align: center;
    line-height: 40px;
    z-index: 9;
  }

  .option-input:checked::after {
    -webkit-animation: click-wave 0.65s;
    -moz-animation: click-wave 0.65s;
    animation: click-wave 0.65s;
    background: #40e0d0;
    content: '';
    display: block;
    position: relative;
    z-index: 9;
  }

  .option-input.radio {
    border-radius: 50%;
  }

  .option-input.radio::after {
    border-radius: 50%;
  }

  .anShortMessage {
    margin-top: -3px;
  }

  .anMessage {
    margin-top: -1px;
  }

  .newAn-priorityDescription {
    margin-top: 6px;
  }

  .form-hint {
    background: rgba(161, 71, 143, 1);
    border-radius: 3px 3px 3px 3px;
    color: white;
    margin-top: 8px;
    padding: 1px 6px;
    z-index: 999; /* hints stay above all other elements */
    display: none;
  }

  .form-hint::before {
    content: "\25C0";
    color: rgba(161, 71, 143, 1);
    position: absolute;
    top: 1px;
    left: -6px;
  }

  .anUploadBox {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 20px 0px 20px 0px;
  }

  .photo-box-1 {
    padding: 0px;
    min-width: 406px;
  }

  .photo-box {
    padding: 0px;
    min-width: 240px;
  }

  .pictureInput-button {
    display: flex;
    height: 210px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .pictureInput-button-plus {
    width: 54px;
    height: 54px;
    padding: 0px;
    border-radius: 50px;
    cursor: pointer;
  }

  .pictureInput-button-minus {
    width: 54px;
    height: 54px;
    padding: 0px;
    border-radius: 50px;
    cursor: pointer;

  }

  .form-button {
    height: 70px;
    overflow: hidden;
    width: 400px;
    padding: 0px;
    margin: 0 auto;
    background-color: black;
    outline: 0;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
  }

  .form-button-label {
    margin: 0px;
    padding-top: 7px;
    display: block;
    line-height: 50px;
    height: 100%;
    width: 100%;
    text-align: center;
    text-decoration: none;
    font-size: 25px;
    font-weight: bold;
    text-shadow: 0 100px 0 #FFF, 1px 76px 10px #000;
    color: #FFF;
    background: rgba(27, 151, 243, 1);
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .form-button-label:hover {
    text-shadow: 0 50px 0 #FFF, 1px 51px 20px #FFF;
    margin-top: -50px;
    height: 140px;
    background: #222;
  }

  .newAn-right {
    width: 500px;
  }
</style>
