// Copyright 2015 Chris Reynoso
// 
// Licensed under the Apache License, Version 2.0 (the "License"); 
// you may not use this file except in compliance with the License. 
// You may obtain a copy of the License at 
// 
// http://www.apache.org/licenses/LICENSE-2.0 
// 
// Unless required by applicable law or agreed to in writing, software 
// distributed under the License is distributed on an "AS IS" BASIS, 
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
// See the License for the specific language governing permissions and 
// limitations under the License.
//
// 
// The latest version of this file can be found at https://github.com/FreedomMercenary/jquery-utilities
(function($) {
    
    $.fn.belowthefold = function(settings) {
        var fold = $(window).height() + $(window).scrollTop(),
            results = $(this).map(function () { return fold <= $(this).offset().top - ((settings && settings.threshold) || 0); });
        return results.length === 1 ? results[0] : results.get();
    };

    $.fn.abovethetop = function (settings) {
        var top = $(window).scrollTop(),
            results = $(this).map(function () { return top >= $(this).offset().top + $(this).height() - ((settings && settings.threshold) || 0); });
        return results.length === 1 ? results[0] : results.get();
    };
    
    $.fn.rightofscreen = function (settings) {
        var fold = $(window).width() + $(window).scrollLeft(),
            results = $(this).map(function () { return fold <= $(this).offset().left - ((settings && settings.threshold) || 0); });
        return results.length === 1 ? results[0] : results.get();
    };
    
    $.fn.leftofscreen = function (settings) {
        var left = $(window).scrollLeft(),
        results = $(this).map(function () { return left >= $(this).offset().left + $(this).width() - ((settings && settings.threshold) || 0); });
        return results.length === 1 ? results[0] : results.get();
    };
    
    $.fn.inviewport = function (settings) {
        var results = $(this).map(function () { return $(this).is(":visible") && !$.fn.rightofscreen.call(this, settings) && !$.fn.leftofscreen.call(this, settings) && !$.fn.belowthefold.call(this, settings) && !$.fn.abovethetop.call(this, settings); });
        return results.length === 1 ? results[0] : results.get();
    };
    
    $.extend($.expr[":"], {
        "below-the-fold": function(a, i, m) {
            return $.fn.belowthefold.call(a, { threshold: 0 });
        },
        "above-the-top": function(a, i, m) {
            return $.fn.abovethetop.call(a, { threshold: 0 });
        },
        "left-of-screen": function(a, i, m) {
            return $.fn.leftofscreen.call(a, { threshold: 0 });
        },
        "right-of-screen": function(a, i, m) {
            return $.fn.rightofscreen.call(a, { threshold: 0 });
        },
        "in-viewport": function(a, i, m) {
            return $.fn.inviewport.call(a, { threshold: 0 });
        }
    });
})(jQuery);
