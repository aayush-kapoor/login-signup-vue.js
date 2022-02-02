<template> 
  <!--all the html/subcomponents you need to display your list -->
</template>
<script>
export default{
  created: function(){      
     this.getUserConnections();   
  },
  methods: {
     getUserConnections() {
        var savedConnections =  
           this.$store.state.savedSingleUserConnections;
        if (savedConnections) ) {
           this.userConnections = savedConnections;           
        } else {
           //get the connections from your API
           //once you have the data, display it and also save it  
           this.$store.commit('saveSingleUserConnections',   
                this.userConnections);
        }
     }
  }
}
</script>