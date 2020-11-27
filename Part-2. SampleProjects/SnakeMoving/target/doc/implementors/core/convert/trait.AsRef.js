(function() {var implementors = {};
implementors["core_graphics"] = [{"text":"impl AsRef&lt;CGColorSpaceRef&gt; for CGColorSpace","synthetic":false,"types":[]},{"text":"impl AsRef&lt;CGContextRef&gt; for CGContext","synthetic":false,"types":[]},{"text":"impl AsRef&lt;CGDataProviderRef&gt; for CGDataProvider","synthetic":false,"types":[]},{"text":"impl AsRef&lt;CGDisplayModeRef&gt; for CGDisplayMode","synthetic":false,"types":[]},{"text":"impl AsRef&lt;CGEventRef&gt; for CGEvent","synthetic":false,"types":[]},{"text":"impl AsRef&lt;CGEventSourceRef&gt; for CGEventSource","synthetic":false,"types":[]},{"text":"impl AsRef&lt;CGFontRef&gt; for CGFont","synthetic":false,"types":[]},{"text":"impl AsRef&lt;CGImageRef&gt; for CGImage","synthetic":false,"types":[]},{"text":"impl AsRef&lt;CGPathRef&gt; for CGPath","synthetic":false,"types":[]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T:&nbsp;?Sized + Pointable&gt; AsRef&lt;T&gt; for Owned&lt;T&gt;","synthetic":false,"types":[]}];
implementors["either"] = [{"text":"impl&lt;L, R, Target&gt; AsRef&lt;Target&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;Target&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;Target&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R&gt; AsRef&lt;str&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;str&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;str&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R, Target&gt; AsRef&lt;[Target]&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;[Target]&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;[Target]&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()