(function() {var implementors = {};
implementors["core_foundation"] = [{"text":"impl Error for CFError","synthetic":false,"types":[]}];
implementors["crossbeam_channel"] = [{"text":"impl&lt;T:&nbsp;Send&gt; Error for SendError&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Send&gt; Error for TrySendError&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Send&gt; Error for SendTimeoutError&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Error for RecvError","synthetic":false,"types":[]},{"text":"impl Error for TryRecvError","synthetic":false,"types":[]},{"text":"impl Error for RecvTimeoutError","synthetic":false,"types":[]},{"text":"impl Error for TrySelectError","synthetic":false,"types":[]},{"text":"impl Error for SelectTimeoutError","synthetic":false,"types":[]}];
implementors["gif"] = [{"text":"impl Error for DecodingFormatError","synthetic":false,"types":[]},{"text":"impl Error for DecodingError","synthetic":false,"types":[]},{"text":"impl Error for EncodingError","synthetic":false,"types":[]}];
implementors["glutin"] = [{"text":"impl Error for CreationError","synthetic":false,"types":[]},{"text":"impl Error for ContextError","synthetic":false,"types":[]}];
implementors["graphics_api_version"] = [{"text":"impl Error for UnsupportedGraphicsApiError","synthetic":false,"types":[]}];
implementors["image"] = [{"text":"impl Error for ImageError","synthetic":false,"types":[]},{"text":"impl Error for UnsupportedError","synthetic":false,"types":[]},{"text":"impl Error for ParameterError","synthetic":false,"types":[]},{"text":"impl Error for EncodingError","synthetic":false,"types":[]},{"text":"impl Error for DecodingError","synthetic":false,"types":[]},{"text":"impl Error for LimitError","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["jpeg_decoder"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["objc"] = [{"text":"impl Error for MessageError","synthetic":false,"types":[]}];
implementors["png"] = [{"text":"impl Error for DecodingError","synthetic":false,"types":[]},{"text":"impl Error for EncodingError","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Error for LexError","synthetic":false,"types":[]}];
implementors["rayon_core"] = [{"text":"impl Error for ThreadPoolBuildError","synthetic":false,"types":[]}];
implementors["serde"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["shader_version"] = [{"text":"impl Error for ParseOpenGLError","synthetic":false,"types":[]},{"text":"impl Error for ParseGLSLError","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["tiff"] = [{"text":"impl Error for TiffError","synthetic":false,"types":[]}];
implementors["weezl"] = [{"text":"impl Error for LzwError","synthetic":false,"types":[]}];
implementors["winit"] = [{"text":"impl Error for BadIcon","synthetic":false,"types":[]},{"text":"impl Error for EventsLoopClosed","synthetic":false,"types":[]},{"text":"impl Error for CreationError","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()