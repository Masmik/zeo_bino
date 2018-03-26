var validate = function () {
    var form = document.getElementsByTagName('form')[0];
    var errors = [];

    form.addEventListener('submit', validation);


    var rules = {
        required: function (el) {
            if (el.value !== '') {
                return true;
            }
            return false;
        },
        needName: function (el) {
            var regLetters = /^[a-zA-Z]{1,20}$/;
            return regLetters.test(el.value);
        },
        email: function (el) {
            var reg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
            return reg.test(el.value);
        }
    };

    function needValidate(el) {
        if (el.getAttribute("data-rule")) {
            return true;
        }
        return false;
    }

    function showErrors(errors) {

        for (var i = 0; i < errors.length; i++) {
            errors[i].el.classList.add('failed_validation');
        }
    }


    function validation(e) {
        e.preventDefault();

        var inputs = this.elements;

        for (var i = 0, inputLength = inputs.length; i < inputLength; i++) {

            if (!needValidate(inputs[i])) {
                continue;
            }

            var rulesList = inputs[i].dataset.rule;
            rulesList = rulesList.split(' ');

            for (var j = 0, ruleListLength = rulesList.length; j < ruleListLength; j++) {
                if (rulesList[j] in rules) {
                    if (!rules[rulesList[j]](inputs[i])) {
                        errors.push({
                            el: inputs[i],
                            name: inputs[i].name,
                            error_idx: rulesList[j],
                            error: rulesList[j]
                        })
                    }
                }
            }
        }
        if (errors.length > 0) {
            e.preventDefault();
            showErrors(errors);
        }

    }


};
