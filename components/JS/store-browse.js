(function () {
    angular.module('myApp')
        .component('storeBrowse', {
            templateUrl: 'components/HTML/store-browse.html',
            controller: storeBrowseController
        });


    function storeBrowseController( ngCart, $uibModal, $log, User, toaster, sockService) {
        ngCart.setTaxRate(25.69);
        ngCart.setShipping(125.99);

        var self = this;

        self.showCart = showCart;
        self.isNotVisible = false;
        self.isVisible = true;
        self.logOut = User.logout;
        self.pop = pop;
        self.pop2 = pop2;
        self.removeToaster = removeToaster;
        self.Sizes = ["Small", "Medium", "Large"];

        function pop () {
            toaster.pop('success', "Item Added to Cart");
        }

        function pop2 () {
            toaster.pop2('success', "Item Removed from Cart");
        }
        
        function removeToaster () {
            ngCart.removeItemById(id);
            pop2();
        }

        function showCart() {
            self.isNotVisible = self.isNotVisible ? false : true;
            self.isVisible = self.isVisible ? false : true;
        }

        var $ctrl = this;

        $ctrl.items = sockService.item;

        $ctrl.animationsEnabled = true;

        $ctrl.open = function (size) {
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                size: size,
                resolve: {
                    items: function () {
                        return $ctrl.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $ctrl.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $ctrl.openComponentModal = function () {
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                component: 'modalComponent',
                resolve: {
                    items: function () {
                        return $ctrl.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $ctrl.selected = selectedItem;
            }, function () {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        };


    }

    angular.module('myApp').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
        var $ctrl = this;
        $ctrl.items = items;
        $ctrl.selected = {
            item: $ctrl.items[0]
        };

        $ctrl.ok = function () {
            $uibModalInstance.close($ctrl.selected.item);
        };

        $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });

    angular.module('myApp').component('modalComponent', {
        templateUrl: 'myModalContent.html',
        bindings: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: function () {
            var $ctrl = this;

            $ctrl.$onInit = function () {
                $ctrl.items = $ctrl.resolve.items;
                $ctrl.selected = {
                    item: $ctrl.items[0]
                };
            };

            $ctrl.ok = function () {
                $ctrl.close({$value: $ctrl.selected.item});
            };

            $ctrl.cancel = function () {
                $ctrl.dismiss({$value: 'cancel'});
            };
        }
    });

})();