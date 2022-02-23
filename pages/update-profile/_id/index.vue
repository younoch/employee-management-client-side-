<template>
  <div
    class="grid grid-cols-12 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
  >
    <div class="col-span-12 md:col-span-3">
      <button @click="deleteAccount"
        class="px-4 py-2 font-semibold text-white bg-indigo-500 border border-indigo-500 rounded hover:bg-indigo-700 hover:border-transparent"
      >
        Delete Account
      </button>
    </div>
    <form class="col-span-12 md:col-span-9">
      <div class="flex flex-wrap mb-6 -mx-3">
        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
            for="grid-first-name"
          >
            Name
          </label>
          <input
            class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          <p class="text-xs italic text-red-500">Please fill out this field.</p>
        </div>
        <div class="w-full px-3 md:w-1/2">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
            for="grid-last-name"
          >
            SURNAME
          </label>
          <input
            class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div class="flex flex-wrap mb-6 -mx-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
            for="grid-first-name"
          >
            Image URL
          </label>
          <input
            class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          <p class="text-xs italic text-red-500">Please fill out this field.</p>
        </div>
      </div>
      <div class="flex flex-wrap mb-6 -mx-3">
        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
            for="grid-first-name"
          >
            Contact
          </label>
          <input
            class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          <p class="text-xs italic text-red-500">Please fill out this field.</p>
        </div>
        <div class="w-full px-3 md:w-1/2">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
            for="grid-last-name"
          >
            Email
          </label>
          <input
            class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div class="flex flex-wrap mb-6 -mx-3">
        <div class="w-full px-3 md:w-1/2">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
            for="grid-password"
          >
            Password
          </label>
          <input
            class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="password"
            placeholder="******************"
          />
          <p class="text-xs italic text-gray-600">
            Make it as long and as crazy as you'd like
          </p>
        </div>
        <div class="w-full px-3 md:w-1/2">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
            for="grid-password"
          >
            Confirm Password
          </label>
          <input
            class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="password"
            placeholder="******************"
          />
          <p class="text-xs italic text-gray-600">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <div class="flex flex-wrap mb-2 -mx-3">
        <div class="w-full px-3 mb-6 md:w-1/3 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
            for="grid-city"
          >
            City
          </label>
          <input
            class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="Albuquerque"
          />
        </div>
        <div class="w-full px-3 mb-6 md:w-1/3 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
            for="grid-city"
          >
            Districts
          </label>
          <input
            class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="Albuquerque"
          />
        </div>
        <div class="w-full px-3 mb-6 md:w-1/3 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase "
            for="grid-zip"
          >
            Zip
          </label>
          <input
            class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            placeholder="90210"
          />
        </div>
      </div>
      <div class="flex justify-end gap-3 mt-10">
        <nuxt-link to="/emplyee-list">
          <button
            class="px-4 py-2 font-semibold text-indigo-700 bg-transparent border border-indigo-500 rounded hover:bg-indigo-500 hover:text-white hover:border-transparent"
          >
            Cancel
          </button></nuxt-link
        >

        <nuxt-link to="/emplyee-list">
          <button
            type="submit"
            class="px-4 py-2 font-semibold text-white bg-indigo-500 border border-indigo-500 rounded hover:bg-indigo-700 hover:border-transparent"
          >
            Update
          </button>
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    deleteAccount() {
      const currentId = this.$route.params.id;
      console.log({currentId});
      this.$axios.delete(`${process.env.PROJECT_API}/${currentId}`)
      .then((response) => {
        console.log(response);
        this.$router.push({ path: `/` });
      });
    },
  },
};
</script>