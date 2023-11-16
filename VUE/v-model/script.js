Vue.createApp({
    
  
  
  data() {
      return {
        image:
          "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1327/original/Coding_Bootcamps_Europe_logo.png",
        personName: "",
        selectedClass: null,
        classes: [
          {
            value: "",
            text: "Please choose a class"
          },
          {
            value: "2021-nov",
            text: "2021 - November"
          },
          {
            value: "2021-dez",
            text: "2021 - December"
          },
          {
            value: "2022-jan",
            text: "2022 - January"
          }
        ],

        redValue: 255,
        greenValue: 105,
        blueValue: 180,
      };
    },
    computed: {
      displayName() {
        return this.personName.length > 0 ? this.personName : "John Doe";
      },
      displayClass() {
        return this.selectedClass.value === "" ? "-" : this.selectedClass.text;
      },
    
      rgbCode() {
        // Hier könntest du die Werte für den Farbcode berechnen, wenn gewünscht
        return `rgb(${this.redValue}, ${this.greenValue}, ${this.blueValue})`;
   
      }
    
    },
    created() {
      this.selectedClass = this.classes[0];
    },

    watch: {
      rgbCode(newValue) {
        // Ändere den Hintergrund des gesamten Dokuments
        document.body.style.backgroundColor = newValue;
      }}
  }).mount("#app");


     