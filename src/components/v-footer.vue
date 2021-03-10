<template>
    <footer class="v-footer">
        <div class="v-footer__content">
            <div class="v-footer__content-item">
                <h4 class="v-footer__content-title">Contact</h4>
                <p class="v-footer__content-description p-margin">Questions? Go ahead.</p>
                <form class="v-footer__content-form" action="/action_page.php" target="_blank">
                    <input class="input" type="text" placeholder="Name" required>
                    <input class="input" type="text" placeholder="Email" required>
                    <input class="input" type="text" placeholder="Subject" required>
                    <input class="input" type="text" placeholder="Message" required>
                    <button class="button v-footer__content-form__btn" type="submit">Send</button>
                </form>
            </div>
            <div class="v-footer__content-item">
                <h4 class="v-footer__content-title">About</h4>
                <div class="v-footer__content-linkBox">
                    <router-link class="v-footer__content-link" to="/about-us">About us</router-link>
                    <router-link class="v-footer__content-link" to="/hiring">We're hiring</router-link>
                    <router-link class="v-footer__content-link" to="/support">Support</router-link>
                    <router-link class="v-footer__content-link" to="/find-store">Find store</router-link>
                    <router-link class="v-footer__content-link" to="/shipment">Shipment</router-link>
                    <router-link class="v-footer__content-link" to="/payment">Payment</router-link>
                    <router-link class="v-footer__content-link" to="/gift-card">Gift card</router-link>
                    <router-link class="v-footer__content-link" to="/return">Return</router-link>
                    <router-link class="v-footer__content-link" to="/help">Help</router-link>
                </div>

            </div>

            <div class="v-footer__content-item">
                <div class="v-footer__content-linkBox text-justify">
                    <h4 class="v-footer__content-title mb-0"> Store</h4>
                    <p><i class="fas fa-map-marker-alt"></i> Company Name</p>
                    <p><i class="fas fa-phone-alt"></i> 0044123123</p>
                    <p><i class="fa  fa-envelope"></i> ex@mail.com</p>
                    <h4 class="v-footer__content-title m-0"> We accept</h4>
                    <p><i class="fab fa-cc-amex"></i> Amex</p>
                    <p><i class="fa  fa-credit-card"></i> Credit Card</p>
                    <div class="v-footer__content-media">
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-snapchat"></i>
                        <i class="fab fa-pinterest-p"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
        </div>

    </footer>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class VFooter extends Vue {

    }
</script>

<style lang="scss">
    .v-footer {
        background-color: $footer-bg__color;
        padding: $padding*4 0;

        &__content {
            padding: 0 $padding/2;
            display: flex;

            &-title {
                margin: 10px 0;
            }

            &-description {
                font-size: $large_font_size/2;
            }

            &-item {
                flex-basis: 33%;
                padding: 0 $padding/2;
                text-align: center;
                font-size: $large_font_size/2;
            }

            &-form {
                width: 100%;
                display: inline-flex;
                flex-direction: column;
                flex-wrap: wrap;
                gap: 12px;
                font-size: $large_font_size/2;

                &__btn {
                    background-color: black !important;
                    color: white;
                    width: 100%;
                    font-size: inherit;
                }
            }

            &-linkBox {
                display: inline-flex;
                flex-direction: column;
                flex-wrap: wrap;
                gap: 10px;
                font-size: inherit;
            }

            &-link {
                text-decoration: underline;
            }

            &-media {
                font-size: 18px;
                display: inline-flex;
                gap: 2px;
                margin-top: 15px;

                i:hover{
                    opacity: .6;
                }
            }
        }
    }
</style>



