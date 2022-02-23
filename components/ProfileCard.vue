<template>
  <div class="wrap">
    <div class="card">
      <div class="card-liner">
        <figure>
          <img
            src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=170667a&w=0&h=FXkT-N6vISLOCUefa9MyQg0pH-6loMX9zBZjgLK458c="
            alt=""
          />
        </figure>
        <div class="card--social">
          <ul>
            <li class="twitter">
              <a href="#0">
                <fa :icon="['fab', 'facebook']" />
              </a>
            </li>
            <li class="linkedin">
              <a href="#0">
                <fa :icon="['fab', 'twitter']" />
              </a>
            </li>
          </ul>
        </div>
        <div class="card--title">
          <h3>{{ user.firstName }}</h3>
          <p>{{ user.lastName }}</p>
          <button @click="routerPush">
            <fa
              class="mt-6 text-3xl text-indigo-600"
              :icon="['fa', 'square-pen']"
            />
          </button>
        </div>

        <div class="card--desc">
          <hr />
          <div>
            <h2 class="font-bold">Username:</h2>
            <p>younoch295</p>
          </div>
          <div>
            <h2 class="font-bold">Email:</h2>
            <p>younoch295@gmail.com</p>
          </div>
          <div>
            <h2 class="font-bold">Address:</h2>
            <p>
              Cecilia Chapman <br />
              711-2880 Nulla St. <br />
              Mankato Mississippi 96522 <br />
              (257) 563-7401
            </p>
          </div>
        </div>
        <div class="card--btn">
          <a href="#0">
            <span class="moreinfo"
              ><i class="fa fa-info-circle"></i> More Info</span
            >
            <span class="fullprof">View Full Profile</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  methods: {
    routerPush() {
      this.$router.push({ path: `/update-profile/${this.user.id}` });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  @apply h-auto;
}

.card {
  @apply h-full flex justify-center;
  background: #fff;
  border: 1px solid #eee;
  transition: all 0.35s ease;
  &:hover {
    border-color: #ddd;
    box-shadow: rgba(#0a9191, 0.1) 0 0 5em;
    figure {
      transform: scale(0.6) translateY(-1.4em);
    }
    .card--title {
      transform: translateY(-5em);
    }
    .card--desc {
      @apply visible opacity-100;
      transform: translateY(0);
      transition-duration: 0.4s;
      p {
        opacity: 1;
      }
      hr {
        transition-delay: 0.1s;
        transform: scale(1, 1);
      }
    }
    .card--social {
      li {
        opacity: 1;
        transition-duration: 0.3s;
        transition-delay: 0.1s;
        transform: translate(0, 0) rotate(0deg);
      }
    }
    .card--btn {
      a {
        background: #fbfbfb;
        border-color: #ddd;
      }
      .moreinfo {
        opacity: 0;
        transform: translateY(-50px);
      }
      .fullprof {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  figure {
    @apply relative overflow-hidden p-1 rounded-full;
    z-index: 299;
    width: 10em;
    height: 10em;
    margin: 0 auto 1em;
    border: 1px solid #eee;
    transform-origin: center top;
    transition: all 0.4s ease-out-circ;
    img {
      @apply w-full block rounded-full;
    }
  }
}

.card-liner {
  @apply w-full relative overflow-hidden;
  padding: 2em;
}

.card--title {
  @apply text-center;
  line-height: 1;
  transition: all 0.4s ease-out;
  h3 {
    margin: 0 0 0.4em;
    font-size: 1.4em;
  }
  p {
    color: #a5a5a5;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 2.2px;
  }
}

.card--desc {
  @apply absolute text-center invisible opacity-0;
  top: 40%;
  left: 9%;
  width: 82%;
  padding-bottom: 0.8em;
  transform: translateY(3em);
  transition: all 0.02s ease-out;
  p {
    margin: 0 0 0.5em;
    font-weight: 300;
    opacity: 0;
    transition: all 0.55s ease 0.1s;
    span {
      text-decoration: line-through;
    }
  }
  hr {
    @apply bg-indigo-600 border-0;
    width: 3em;
    margin: 0 auto 0.75em;
    height: 3px;
    transform: scale(0, 1);
    transition: all 0.4s ease-out 0.05s;
  }
}

.card--btn {
  @apply text-center absolute bottom-0 left-0 w-full;
  a {
    @apply relative overflow-hidden block uppercase;
    line-height: 1;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.8em;
    color: #a5a5a5;
    padding: 1.4em 2em;
    border-top: 1px solid #eee;
    letter-spacing: 0.5px;
    transition: all 0.4s ease;
    .fullprof {
      @apply block text-indigo-600 opacity-0;
      transform: translateY(50px);
      transition: all 0.4s ease-out;
    }
    .moreinfo {
      @apply block absolute top-0 left-0 w-full opacity-100;
      padding: 1.4em;
      transition: all 0.4s ease-out;
      i {
        margin-right: 5px;
      }
    }
  }
}

.card--social {
  @apply absolute left-0 w-full;
  top: 3em;
  ul {
    @apply m-0  relative;
    list-style: none;
    padding: 2em;
  }
  li {
    @apply block text-center absolute top-0 opacity-0;
    transition: all 0.02s ease-out;
    &.twitter {
      left: 72%;
      transform: translate(-200%, 1em) scale(0.7);
    }
    &.linkedin {
      right: 72%;
      transform: translate(200%, 1em) scale(0.7);
    }
  }
  a {
    @apply block rounded-full text-indigo-600;
    line-height: 2.4;
    width: 2.3em;
    height: 2.3em;
    border: 1px solid #ccc;
    background: #fbfbfb;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      background: #eee;
    }
  }
}

.cred {
  @apply fixed bottom-0 left-0 w-full text-center;
  background: #fff;
  border-top: 1px solid #eee;
  text-decoration: none;
  a {
    @apply block;
    padding: 1em;
    text-decoration: none;
    color: #ccc;
    font-weight: 300;
    font-size: 0.9em;
    letter-spacing: 0.5px;
    i {
      margin-left: 10px;
    }
  }
}
</style>