<template>
    <div class="container">
        <div class="row">
            <div class="mx-auto col col-12 col-sm-11 col-md-9 col-lg-7 col-xl-6">
                <h1 class="text-center">
                    <router-link class="text-dark" to="/">
                        laravel-sns
                    </router-link>
                </h1>

                <div class="card mt-3">
                    <div class="card-body text-center">
                        <h2 class="h3 card-title text-center mt-2">ログイン</h2>

                        <a class="btn btn-block btn-danger">
                            <i class="fab fa-google mr-1"></i>Googleでログイン
                        </a>

                        <div class="card-text">
                            <form @submit.prevent="login">

                                <div class="md-form">
                                    <label for="email">メールアドレス</label>
                                    <input class="form-control" type="email" id="email" name="email" v-model="form.email">
                                </div>

                                <div class="md-form">
                                    <label for="password">パスワード</label>
                                    <input class="form-control" type="password" id="password" name="password" v-model="form.password">
                                </div>

                                <div class="text-left">
                                    <a class="card-text">パスワードを忘れた方</a>
                                </div>

                                <button class="btn btn-block blue-gradient mt-2 mb-2" type="submit">ログイン</button>

                            </form>

                            <div class="mt-0">
                                <a class="card-text">ユーザー登録はこちら</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            form: {
                email: null,
                password: null
            }
        }
    },
    methods:{
        login(){
            User.login(this.form)
        }
    }
}
</script>
