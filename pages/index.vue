<template>
  <LogRegistraion :user="gettersusers" />
</template>

<script>
export default {
  name: "LogResistraion",
  computed: {
    gettersusers() {
      return this.$store.getters.allUsers;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
};
</script>