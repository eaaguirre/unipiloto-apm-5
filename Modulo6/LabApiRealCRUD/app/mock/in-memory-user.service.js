"use strict";
var InMemoryProductService = (function () {
    function InMemoryProductService() {
    }
    InMemoryProductService.prototype.createDb = function () {
        var users = [
            {
                name: "Edinson",
                id: 1,
                phone: "211212"
            },
            {
                name: "pedro",
                id: 2,
                phone: "00000"
            },
            {
                name: "pablo",
                id: 3,
                phone: "4545452"
            },
            {
                name: "juan",
                id: 4,
                phone: "454542"
            },
            {
                name: "anacleta",
                id: 5,
                phone: "211212"
            },
            {
                name: "pancracia",
                id: 6,
                phone: "214555512"
            },
        ];
        return { users: users };
    };
    return InMemoryProductService;
}());
exports.InMemoryProductService = InMemoryProductService;
//# sourceMappingURL=in-memory-user.service.js.map