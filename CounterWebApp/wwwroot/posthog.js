(function () {
    const settings = window.counterAppPostHog || {};
    const apiKey = settings.apiKey;
    const host = settings.host || "https://us.i.posthog.com";

    window.counterAnalytics = {
        captureCounterClick(count) {
            if (!window.posthog || typeof window.posthog.capture !== "function") {
                return;
            }

            window.posthog.capture("counter_button_clicked", {
                count
            });
        }
    };

    if (!apiKey) {
        return;
    }

    window.posthog = window.posthog || [];
    window.posthog._i = [];
    window.posthog.init = function (key, options, name) {
        function createMethod(methodName) {
            return function () {
                window.posthog.push([methodName].concat(Array.prototype.slice.call(arguments, 0)));
            };
        }

        let target = window.posthog;
        if (typeof name !== "undefined") {
            target[name] = [];
            target[name]._i = target._i;
            target[name].init = target.init;
            target[name].__SV = target.__SV;
            target = target[name];
        }

        const methods = [
            "capture",
            "identify",
            "alias",
            "people.set",
            "people.set_once",
            "set_config",
            "register",
            "register_once",
            "unregister",
            "opt_out_capturing",
            "has_opted_out_capturing",
            "opt_in_capturing",
            "reset"
        ];

        for (let i = 0; i < methods.length; i += 1) {
            target[methods[i]] = createMethod(methods[i]);
        }

        target._i.push([key, options, name]);
    };
    window.posthog.__SV = 1;

    const script = document.createElement("script");
    script.async = true;
    script.src = host.replace(/\/$/, "") + "/static/array.js";
    document.head.appendChild(script);

    window.posthog.init(apiKey, {
        api_host: host,
        person_profiles: "identified_only"
    });
}());
