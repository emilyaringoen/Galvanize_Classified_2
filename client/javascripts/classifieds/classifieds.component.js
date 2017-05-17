(function() {
  'use strict'
  angular
    .module('app')
    .component('classifieds', {
      controller: controller,
      templateUrl: './javascripts/classifieds/classifieds.html'
    })

    controller.$inject = ['classService']
    function controller(classService) {
      const vm = this
      vm.$onInit = onInit
      vm.getIt = getIt
      vm.createClass = createClass

      function onInit() {
        getIt()
      }

      function getIt() {
        classService.getClass().then(classifieds => {
          vm.classifieds = classifieds
        })
      }

      function createClass() {

      }
    }
}())
