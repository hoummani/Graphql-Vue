import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//for apollo-client
// 1
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import VueApollo from "vue-apollo";

Vue.config.productionTip = false;

// 3
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:4000/graphql"
});

// 4
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

// 5
Vue.use(VueApollo);

// 6
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: "loading"
  }
});

new Vue({
  provide: apolloProvider.provide(),
  router,
  store,
  render: h => h(App)
}).$mount("#app");
