  Vue.createApp({

    data(){ return {


      checked: false,
      prio: false,
      taskNameN: '',
      taskDescN: '',

      tasksN: JSON.parse(localStorage.getItem('tasksN')) || []
    };
  },




    methods: {
      renderTasksN() {
        const taskListN = document.querySelector('#taskListN');
        taskListN.innerHTML = '';
  
        this.tasksN.forEach((task, index) => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `<input type="checkbox" class="check" v-model="tasksN[${index}].checked">
                                <strong>${task.name}</strong>${task.desc}
                                <button class="deleteBtnN" @click="deleteItemN(${index})">X</button>`;
          taskListN.appendChild(listItem);
        });
        
      },
      addTaskN() {
        if (!this.taskNameN.trim()) {
          return;
        }
  
        this.tasksN.push({ name: this.taskNameN, desc: this.taskDescN, checked: false , prio: false });
        localStorage.setItem('tasksN', JSON.stringify(this.tasksN));
  
        this.taskNameN = '';
        this.taskDescN = '';
  
      },



      deleteItemN(index) {
        this.tasksN.splice(index, 1);
        localStorage.setItem('tasksN', JSON.stringify(this.tasksN));
     
      },

      
      checkCheck(index) {
        this.tasksN[index].checked = !this.tasksN[index].checked;
        localStorage.setItem("tasksN", JSON.stringify(this.tasksN));
      
      },


      prio(index) {
        this.tasksN[index].prio = !this.tasksN[index].prio;
        localStorage.setItem("tasksN", JSON.stringify(this.tasksN));
      
      },

      clearListee() {
        const checkedItems = this.tasksN.filter(task => task.checked);
        checkedItems.forEach(task => {
          const index = this.tasksN.indexOf(task);
          this.tasksN.splice(index, 1);
        });
  
        localStorage.setItem("tasksN", JSON.stringify(this.tasksN));
      
      }
    },
 
  }).mount("#app");