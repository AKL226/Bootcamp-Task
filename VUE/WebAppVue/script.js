  Vue.createApp({

    data(){ return {


   
      taskNameN: '',
      taskDescN: '',
      checked: false,
      priori: false,
      tasksN: JSON.parse(localStorage.getItem('tasksN')) || []
    };
  },




    methods: {

      focusNextField( nextField) {    

                                // ref ist schlüsselanwendung
          const nextFieldZiel = this.$refs[nextField];
            nextFieldZiel.focus();
           },

      addTaskN() {
        this.tasksN.push({ name: this.taskNameN, desc: this.taskDescN, checked: false , priori: false });
        localStorage.setItem('tasksN', JSON.stringify(this.tasksN));
      },

      deleteItemN(index) {
        this.tasksN.splice(index, 1);
        localStorage.setItem('tasksN', JSON.stringify(this.tasksN));   
      },

      
      checkCheck(index) {
        this.tasksN[index].checked = !this.tasksN[index].checked;
        localStorage.setItem("tasksN", JSON.stringify(this.tasksN));   
      },


      prioMethode(index) {
        this.tasksN[index].priori = !this.tasksN[index].priori;
        localStorage.setItem("tasksN", JSON.stringify(this.tasksN));
      },

      clearListee() {
        const checkedItems = this.tasksN.filter(task => task.checked);
        checkedItems.forEach(task => {
          const index = this.tasksN.indexOf(task);
          this.tasksN.splice(index, 1);

          localStorage.setItem("tasksN", JSON.stringify(this.tasksN));
        });
  
       
      
      }
    },
 
      
  }).mount("#app");