<template>
  <div
    class="relative h-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl"
  >
    <img
      src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
      class="absolute inset-0 object-cover w-full h-full"
      alt=""
    />
    <div class="relative bg-gray-900 bg-opacity-75">
      <div
        class="
          px-4
          flex
          items-center
          justify-between
          mx-auto
          sm:max-w-xl
          md:max-w-full
          lg:max-w-screen-xl
          md:px-24
          lg:px-8 lg:py-20
        "
      >
        <div class="flex flex-col items-center justify-between xl:flex-row">
          <div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h2
              class="
                max-w-lg
                mb-6
                font-sans
                text-3xl
                font-bold
                tracking-tight
                text-white
                sm:text-4xl sm:leading-none
              "
            >
              The quick, brown fox <br class="hidden md:block" />
              jumps over a <span class="text-teal-accent-400">lazy dog</span>
            </h2>
            <p class="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
            </p>
            <a
              href="/"
              aria-label=""
              class="
                inline-flex
                items-center
                font-semibold
                tracking-wider
                transition-colors
                duration-200
                text-indigo-200
                hover:text-indigo-800
              "
            >
              Learn more
              <svg
                class="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path
                  d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
                ></path>
              </svg>
            </a>
          </div>
          <div class="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div class="bg-white rounded shadow-2xl p-7 sm:p-10">
              <h3
                v-if="showSignIn"
                class="
                  mb-4
                  text-xl
                  font-semibold
                  sm:text-center sm:mb-6 sm:text-2xl
                "
              >
                Sign in
              </h3>
              <h3
                v-else
                class="
                  mb-4
                  text-xl
                  font-semibold
                  sm:text-center sm:mb-6 sm:text-2xl
                "
              >
                Sign up
              </h3>

              <!-- Sign in form -->
              <form v-if="showSignIn">
                <div class="mb-1 sm:mb-2">
                  <label for="email" class="inline-block mb-1 font-medium"
                    >E-mail</label
                  >
                  <input
                    v-model="signinEmail"
                    placeholder="john.doe@example.org"
                    required=""
                    type="text"
                    class="
                      flex-grow
                      w-full
                      h-12
                      px-4
                      mb-2
                      transition
                      duration-200
                      bg-white
                      border border-gray-300
                      rounded
                      shadow-sm
                      appearance-none
                      focus:border-deep-purple-accent-400
                      focus:outline-none
                      focus:shadow-outline
                    "
                    id="email"
                    name="email"
                  />
                </div>
                <div class="mb-1 sm:mb-2">
                  <label for="logPassword" class="inline-block mb-1 font-medium"
                    >Password</label
                  >
                  <input
                    v-model="signPassword"
                    placeholder=""
                    required=""
                    type="password"
                    class="
                      flex-grow
                      w-full
                      h-12
                      px-4
                      mb-2
                      transition
                      duration-200
                      bg-white
                      border border-gray-300
                      rounded
                      shadow-sm
                      appearance-none
                      focus:border-deep-purple-accent-400
                      focus:outline-none
                      focus:shadow-outline
                    "
                    id="logPassword"
                    name="logPassword"
                  />
                </div>
                <div class="w-full col-span-2">
                  <button
                    type="submit"
                    @click="setSignStatus"
                    class="
                      w-full
                      col-span-2
                      py-3
                      my-1
                      font-medium
                      text-center text-white
                      rounded
                      bg-green
                      hover:bg-green-dark
                      focus:outline-none
                      bg-indigo-600
                    "
                  >
                    Log In
                  </button>
                </div>
                <p class="text-xs text-gray-600 sm:text-sm">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>

              <!-- Sign up form -->
              <form v-else>
                <div class="mb-1 sm:mb-2">
                  <label for="firstName" class="inline-block mb-1 font-medium"
                    >First name</label
                  >
                  <input
                    placeholder="John"
                    required=""
                    type="text"
                    class="
                      flex-grow
                      w-full
                      h-12
                      px-4
                      mb-2
                      transition
                      duration-200
                      bg-white
                      border border-gray-300
                      rounded
                      shadow-sm
                      appearance-none
                      focus:border-deep-purple-accent-400
                      focus:outline-none
                      focus:shadow-outline
                    "
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div class="mb-1 sm:mb-2">
                  <label for="lastName" class="inline-block mb-1 font-medium"
                    >Last name</label
                  >
                  <input
                    placeholder="Doe"
                    required=""
                    type="text"
                    class="
                      flex-grow
                      w-full
                      h-12
                      px-4
                      mb-2
                      transition
                      duration-200
                      bg-white
                      border border-gray-300
                      rounded
                      shadow-sm
                      appearance-none
                      focus:border-deep-purple-accent-400
                      focus:outline-none
                      focus:shadow-outline
                    "
                    id="lastName"
                    name="lastName"
                  />
                </div>
                <div class="mb-1 sm:mb-2">
                  <label for="email" class="inline-block mb-1 font-medium"
                    >E-mail</label
                  >
                  <input
                    placeholder="john.doe@example.org"
                    required=""
                    type="text"
                    class="
                      flex-grow
                      w-full
                      h-12
                      px-4
                      mb-2
                      transition
                      duration-200
                      bg-white
                      border border-gray-300
                      rounded
                      shadow-sm
                      appearance-none
                      focus:border-deep-purple-accent-400
                      focus:outline-none
                      focus:shadow-outline
                    "
                    id="email"
                    name="email"
                  />
                </div>
                <div class="w-full col-span-2">
                  <button
                    type="submit"
                    @click="setSignStatus"
                    class="
                      w-full
                      py-3
                      my-1
                      font-medium
                      text-center text-white
                      rounded
                      bg-green
                      hover:bg-green-dark
                      focus:outline-none
                      bg-indigo-600
                    "
                  >
                    Create Account
                  </button>
                </div>
                <p class="text-xs text-gray-600 sm:text-sm">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const counter = 5;
    return {
      counter,
    };
  },
  async asyncData(context) {
    const query_params = context.route.query;
  },

  created() {
   
  },

  data() {
    return {
      signinEmail: "",
      signPassword: null,
    };
  },
  props: ["user"],
  computed: {
    // a computed getter
    showSignIn() {
      // `this` points to the component instance
      return this.$store.state.showSignin;
    },
  },
  methods: {
    setSignIn() {
      this.$store.commit("showSignin");
    },
    setSignStatus() {
      this.getSigninId();
      this.$store.dispatch("setSigninState");
    },

    getSigninId() {
      const signinUser = this.user.find((el) => el.email === this.signinEmail);
      const signinId = signinUser.id;
      console.log("signinUser id:", signinId);
      if (!!signinId) {
        this.$router.push({ path: `/emplyee-list/${signinId}` });
      }
    },
  },
};
</script>