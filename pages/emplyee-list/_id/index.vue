<template>
  <!-- class="grid grid-cols-12" -->
  <section class="grid grid-cols-12">
    <ProfileCard class="col-span-3" />
    <div
      class="flex items-center justify-center overflow-hidden col-span-9"
      style="background: #edf2f7"
    >
      <div class="w-full p-8 pb-0 bg-white rounded-md">
        <div class="flex items-center justify-between pb-4">
          <div>
            <h2 class="text-2xl font-semibold text-gray-600">Emplyee List</h2>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center p-2 rounded-md bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                class="block ml-1 outline-none bg-gray-50"
                type="text"
                name=""
                id=""
                placeholder="search..."
              />
            </div>
            <div class="ml-10 space-x-8 lg:ml-40">
              <button
                class="
                  px-4
                  py-2
                  font-semibold
                  tracking-wide
                  text-white
                  bg-indigo-600
                  rounded-md
                  cursor-pointer
                "
              >
                New Report
              </button>
              <button
                class="
                  px-4
                  py-2
                  font-semibold
                  tracking-wide
                  text-white
                  bg-indigo-600
                  rounded-md
                  cursor-pointer
                "
              >
                Create
              </button>
            </div>
          </div>
        </div>
        <div>
          <div class="pr-4 pt-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div
              class="inline-block min-w-full overflow-hidden rounded-lg shadow"
            >
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      class="
                        px-5
                        py-3
                        text-xs
                        font-semibold
                        tracking-wider
                        text-left text-gray-600
                        uppercase
                        bg-gray-100
                        border-b-2 border-gray-200
                      "
                    >
                      Name
                    </th>
                    <th
                      class="
                        px-5
                        py-3
                        text-xs
                        font-semibold
                        tracking-wider
                        text-left text-gray-600
                        uppercase
                        bg-gray-100
                        border-b-2 border-gray-200
                      "
                    >
                      Surname
                    </th>
                    <th
                      class="
                        px-5
                        py-3
                        text-xs
                        font-semibold
                        tracking-wider
                        text-left text-gray-600
                        uppercase
                        bg-gray-100
                        border-b-2 border-gray-200
                      "
                    >
                      Email
                    </th>
                    <th
                      class="
                        px-5
                        py-3
                        text-xs
                        font-semibold
                        tracking-wider
                        text-left text-gray-600
                        uppercase
                        bg-gray-100
                        border-b-2 border-gray-200
                      "
                    >
                      Contact
                    </th>
                    <th
                      class="
                        px-5
                        py-3
                        text-xs
                        font-semibold
                        tracking-wider
                        text-left text-gray-600
                        uppercase
                        bg-gray-100
                        border-b-2 border-gray-200
                      "
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in gettersusers" :key="index">
                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p
                            class="
                              text-gray-900
                              whitespace-no-wrap
                              font-semibold
                            "
                          >
                            {{ user.firstName }}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ user.lastName }}
                      </p>
                    </td>
                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ user.email }}
                      </p>
                    </td>
                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ user.secondaryEmail }}
                      </p>
                    </td>
                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <span
                        class="
                          relative
                          inline-block
                          px-3
                          py-1
                          font-semibold
                          leading-tight
                          text-green-900
                        "
                      >
                        <span
                          aria-hidden
                          class="
                            absolute
                            inset-0
                            bg-green-200
                            rounded-full
                            opacity-50
                          "
                        ></span>
                        <span class="relative">Active</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Blake Bowman
                          </p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <p class="text-gray-900 whitespace-no-wrap">Editor</p>
                    </td>
                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        Jan 01, 2020
                      </p>
                    </td>

                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <p class="text-gray-900 whitespace-no-wrap">77</p>
                    </td>
                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <span
                        class="
                          relative
                          inline-block
                          px-3
                          py-1
                          font-semibold
                          leading-tight
                          text-green-900
                        "
                      >
                        <span
                          aria-hidden
                          class="
                            absolute
                            inset-0
                            bg-green-200
                            rounded-full
                            opacity-50
                          "
                        ></span>
                        <span class="relative">Active</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Dana Moore
                          </p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <p class="text-gray-900 whitespace-no-wrap">Editor</p>
                    </td>
                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        Jan 10, 2020
                      </p>
                    </td>

                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <p class="text-gray-900 whitespace-no-wrap">64</p>
                    </td>
                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <span
                        class="
                          relative
                          inline-block
                          px-3
                          py-1
                          font-semibold
                          leading-tight
                          text-orange-900
                        "
                      >
                        <span
                          aria-hidden
                          class="
                            absolute
                            inset-0
                            bg-orange-200
                            rounded-full
                            opacity-50
                          "
                        ></span>
                        <span class="relative">Suspended</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 text-sm bg-white">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Alonzo Cox
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white">
                      <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Jan 18, 2020
                      </p>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white">
                      <p class="text-gray-900 whitespace-no-wrap">70</p>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white">
                      <span
                        class="
                          relative
                          inline-block
                          px-3
                          py-1
                          font-semibold
                          leading-tight
                          text-red-900
                        "
                      >
                        <span
                          aria-hidden
                          class="
                            absolute
                            inset-0
                            bg-red-200
                            rounded-full
                            opacity-50
                          "
                        ></span>
                        <span class="relative">Inactive</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Dana Moore
                          </p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <p class="text-gray-900 whitespace-no-wrap">Editor</p>
                    </td>
                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        Jan 10, 2020
                      </p>
                    </td>

                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <p class="text-gray-900 whitespace-no-wrap">64</p>
                    </td>
                    <td
                      class="
                        px-5
                        py-5
                        text-sm
                        bg-white
                        border-b border-gray-200
                      "
                    >
                      <span
                        class="
                          relative
                          inline-block
                          px-3
                          py-1
                          font-semibold
                          leading-tight
                          text-orange-900
                        "
                      >
                        <span
                          aria-hidden
                          class="
                            absolute
                            inset-0
                            bg-orange-200
                            rounded-full
                            opacity-50
                          "
                        ></span>
                        <span class="relative">Suspended</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                class="
                  flex flex-col
                  items-center
                  px-5
                  py-5
                  bg-white
                  border-t
                  xs:flex-row xs:justify-between
                "
              >
                <span class="text-xs text-gray-900 xs:text-sm">
                  Showing 1 to 5 of 50 Entries
                </span>
                <div class="inline-flex mt-2 xs:mt-0">
                  <button
                    class="
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      transition
                      duration-150
                      bg-indigo-600
                      rounded-l
                      text-indigo-50
                      hover:bg-indigo-500
                    "
                  >
                    Prev
                  </button>
                  &nbsp; &nbsp;
                  <button
                    class="
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      transition
                      duration-150
                      bg-indigo-600
                      rounded-r
                      text-indigo-50
                      hover:bg-indigo-500
                    "
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isShowProfile: false,
    };
  },
  computed: {
    gettersusers() {
      console.log("The id is younoch:", this.$route.params.id);
      return this.$store.getters.allUsers;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
  methods: {
    showProfile() {
      this.isShowProfile = !this.isShowProfile;
    },
  },
};
</script>

<style>
</style>