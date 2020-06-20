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
                        <h2 class="h3 card-title text-center mt-2">ユーザー登録</h2>

                        <a class="btn btn-block btn-danger">
                            <i class="fab fa-google mr-1"></i>Googleで登録
                        </a>

                        <div class="card-text">
                            <form @submit.prevent="register">
                                <div class="md-form">
                                    <label for="name">ユーザー名</label>
                                    <input class="form-control" type="text" id="name" name="name" v-model="form.name">
                                    <small>英数字3~16文字(登録後の変更はできません)</small>
                                </div>

                                <div class="text-left alert alert-danger" v-if="errors.name">
                                    {{errors.name[0]}}
                                </div>

                                <div class="md-form">
                                    <label for="email">メールアドレス</label>
                                    <input class="form-control" type="email" id="email" name="email" v-model="form.email">
                                </div>

                                <div class="text-left alert alert-danger" v-if="errors.email">
                                    {{errors.email[0]}}
                                </div>

                                <div class="md-form">
                                    <label for="password">パスワード</label>
                                    <input class="form-control" type="password" id="password" name="password" v-model="form.password">
                                </div>

                                <div class="text-left alert alert-danger" v-if="errors.password">
                                    {{errors.password[0]}}
                                </div>

                                <div class="md-form">
                                    <label for="password_confirmation">パスワード(確認)</label>
                                    <input class="form-control" type="password" id="password_confirmation" name="password_confirmation" v-model="form.password_confirmation">
                                </div>

                                <button class="btn btn-block blue-gradient mt-2 mb-2" type="submit">ユーザー登録</button>
                            </form>

                            <div class="mt-0">
                                <router-link class="card-text" to="/login">
                                    ログインはこちら
                                </router-link>
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
        return{
            form: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            },
            errors: {}
        }
    },
    created(){
        if(User.loggedIn()){
            this.$router.push({name: 'home'})
        }
    },
    methods:{
        register(){
            axios.post('/api/auth/register', this.form)
            .then(res => {
                User.responseAfterLogin(res)
                this.$router.push({name: 'home'})
            })
            .catch(error => this.errors = error.response.data.errors)
        }
    }
}
</script>
