(function() {
  'use strict'
  angular
    .module('app')
    .component('classifieds', {
      controller: controller,
      templateUrl: './classifieds/classifieds.html'
    })

    controller.$inject = ['classService']
    function controller(classService) {
      const vm = this
      vm.$onInit = onInit
      vm.getIt = getIt
      vm.createClass = createClass

      function onInit() {
        vm.showNewPost = false
        getIt()
      }

      function getIt() {
        classService.getPosts().then(posts => {
          vm.posts = posts
        })
      }

      function createClass() {

      }
    }
}())
