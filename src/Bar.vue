<template>
    <div>
        <div>look parma!{{$route.query.a}} should be {{$route.query.a.replace(' ', '+')}}</div>
        <div>Why is '+' replaced by ' ' in vue-router/src/util/query.js 62 line? </div>
        <img src="./assets/img.png" alt="why?" width="100%">
        <div>Is it because of what protocol?</div>
        <div>4 example: http protocol?</div>
        <div>Look forward to your reply~</div>
        <div>Best wish~</div>
    </div>
</template>
<script>
export default {
    name: 'Bar'
}
</script>
