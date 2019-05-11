import VueRouter from 'vue-router'

import todolist from './components/todolist.vue'
import icon from './components/icon.vue'
import button from './components/button.vue'
import link from './components/link.vue'

import radio from './components/radio.vue'
import checkbox from './components/checkbox.vue'
import input from './components/input.vue'
import inputNumber from './components/inputNumber.vue'
import select from './components/select.vue'
import cascader from './components/cascader.vue'
import switchC from './components/switch.vue'
import slider from './components/slider.vue'
import timepicker from './components/timepicker.vue'
import datepicker from './components/datepicker.vue'
import upload from './components/upload.vue'
import rate from './components/rate.vue'
import colorpicker from './components/colorpicker.vue'
import form from './components/form.vue'

import table1 from './components/table1.vue'
import table2 from './components/table2.vue'
import tag from './components/tag.vue'
import progress from './components/progress.vue'
import pagination from './components/pagination.vue'
import badge from './components/badge.vue'

import alert1 from './components/alert.vue'
import loading from './components/loading.vue'
import message from './components/message.vue'
import messageBox from './components/messageBox.vue'
import notification from './components/notification.vue'

import datetimepicker from './components/datetimepicker.vue'

// 创建路由对象
var router = new VueRouter({
  routes: [
	   { path: '/', redirect: '/todolist' },
	   { path: '/todolist', component: todolist },
	   { path: '/icon', component: icon },
	   { path: '/button', component: button },
	   { path: '/link', component: link },
	   { path: '/radio', component: radio },
	   { path: '/checkbox', component: checkbox },
	   { path: '/input', component: input },
	   { path: '/inputNumber', component: inputNumber },
	   { path: '/select', component: select },
	   { path: '/cascader', component: cascader },
	   { path: '/switch', component: switchC },
	   { path: '/slider', component: slider },
	   { path: '/timepicker', component: timepicker },
	   { path: '/datepicker', component: datepicker },
	   { path: '/datetimepicker', component: datetimepicker },
	   { path: '/upload', component: upload },
	   { path: '/rate', component: rate },
	   { path: '/colorpicker', component: colorpicker },
	   { path: '/form', component: form },
	   { path: '/table1', component: table1 },
	   { path: '/table2', component: table2 },
	   { path: '/tag', component: tag },
	   { path: '/progress', component: progress },
	   { path: '/pagination', component: pagination },
	   { path: '/badge', component: badge },
	   { path: '/alert', component: alert1 },
	   { path: '/loading', component: loading },
	   { path: '/message', component: message },
	   { path: '/messageBox', component: messageBox },
	   { path: '/notification', component: notification }
  ]
})

export default router
