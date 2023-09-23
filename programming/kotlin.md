# code

## contents

- [code](#code)
  - [contents](#contents)
  - [Kotlin](#kotlin)



## Kotlin

- Kotlin
    - History
        - 2016 first stable release from JetBrains, building since 2011
    - Key Features
        - Created by JetBrains
        - Compiles to Java and Javascript
        - Google moving to Kotlin which developers like also
        - Prevents NPE Null Pointer Exception errors
            
            ```csharp
            val b = "Kotlin"
            if (b != null && b.length > 0) {
                print("String of length ${b.length}")
            } else {
                print("Empty string")
            }
            
            or use
            
            val a = "Kotlin"
            val b: String? = null
            println(b?.length)
            println(a?.length)
            
            ```
            
    - Terms
        - Flux is a stream which can emit n items
            
            ```java
            Flux<String> just = Flux.just("first", "second", "third");
            List<String> elements = new ArrayList<>();
            Flux.just(“first”, “second”,”third”).log().subscribe(elements::add);
            
            // full code
            Flux.just("first", "second", "third")
                .log()
                .subscribe(new Subscriber<String>() {
                    private Subscription sub;
                    int next;
                    @Override
                    public void onNext(String str) {
                        elements.add(str);
                        next++;
                        if (next % 2 == 0) {
                            sub.request(2);
                        }
                    }
                    @Override
                    public void onSubscribe(Subscription sub) {
                        this.sub = sub;
                        sub.request(2);
                    }
            
                    
                    @Override public void onError(final Throwable throwable) {
            
                    }
            
                    @Override public void onComplete() {
            
                    }
            
                });
            ```
            
        - Mono is a stream which can emit one item
            
            ```java
            Mono<String> just = Mono.just("OnlyOneElement");
            ```
            
        - Kotlin Flows = Rx = Reactive Extensions = Reactive Streams have callback onNext, onCompleted and onError#
            - Use this to delay the flow of data
            
            ```java
            fun <T> Flow<T>.delayASecond() = flow {
                collect { value -> // collect from the original flow
                    delay(1000)    // delay 1 second
                    emit(value)    // emit value to the resulting flow
                }
            }
            ```
            
        - companion object - used for static elements
            
            ```java
            class MyClass{
            	companion object{
            		var hi = "hello"
            	}
              
            }
            ```
            
    - Reference
        - Kotlin Language Reference https://kotlinlang.org/docs/reference/basic-syntax.html
        - Whole language in one PDF  https://kotlinlang.org/docs/kotlin-docs.pdf
    - Basics
        - Keywords
            
            ```
            Kotlin keywords List
            as	break	class	continue	do	else
            false	for	fun	if	in	interface
            is	null	object	package	return	super
            this	throw	true	try	typealias	typeof
            val	var	when	while
            ```
            
        - https://www.youtube.com/watch?v=SXLmr4Qp4OM&ab_channel=Devslopes
        - val immutable (final)
        - var mutable
        - print   println
        - input data   val scanner = Scanner(System.`in`)
            
            ```
            // input string
            import java.util.Scanner
            
            fun main(args: Array<String>) {
                val scanner = Scanner(System.`in`)
                
                val list = listOf<String>()
                
                while(true){
                    val stringInput = scanner.nextLine()
                    val valuesList = stringInput.split(" ").map{ item -> item.trim() }
                    valuesList.forEach { item -> println(item) }
                }
            }
            
            // input double
            import java.util.*
            
            fun main(args: Array<String>) {
                val scanner = Scanner(System.`in`)
                var inputDouble = scanner.nextDouble()
                int inputInteger = (int) inputDouble
                return inputInteger
            }
            
            ```
            
        - toInt
            
            ```
            fun main() {
                val number: String = "100"
                var output = number.toInt()
                println(output)
            }
            ```
            
        - double to integer
            
            ```
            import java.util.*
            
            fun main(args: Array<String>) {
                val scanner = Scanner(System.`in`)
                var inputDouble = scanner.nextDouble()
                int inputInteger = (int) inputDouble
                return inputInteger
            }
            ```
            
        - increment++
        - Math.pow
            
            ```
            import java.util.Scanner
            
            fun main(args: Array<String>) {
                val scanner = Scanner(System.`in`)
                var inputDouble = scanner.nextDouble()
                var output = Math.pow(inputDouble,3.0) + Math.pow(inputDouble,2.0 + inputDouble + 1.0
            }
            ```
            
        - Bits
            
            ```jsx
            println(Integer.SIZE)  // 32
            
            ```
            
        - Max values
            
            ```
            fun main(args: Array<String>) {
               println(Integer.MIN_VALUE)
               println(Integer.MAX_VALUE)
            
                val byteMax: Byte = Byte.MAX_VALUE
                println(byteMax)
                val shortMax: Short = Short.MAX_VALUE
                println(shortMax)
                val intMax = Integer.MAX_VALUE
                println(intMax)
                val longMax: Long = Long.MAX_VALUE
                println(longMax)
            }
            ```
            
        - And &&
            
            ```
            b1 && !b2
            
            b1 xor b2
            
            b1 || b2
            ```
            
        - Or ||
        - Xor `xor`
        - dates
            
            ```
            package bot
            import java.time.LocalDateTime
            
            fun main() {
                var botName = "Phil"
                var birthYear = (LocalDateTime.now()).getFullYear()
                println("Hello! My name is $botName")
                println("I was created in $birthYear") 
            }
            ```
            
        - lambda
            
               
            
            - lambda regular
                - fun(a: Int, b: Int): Int { return a*b }  same as {a:Int, b: Int → a*b }
            
            lambda no body
            
             
            
            - fun (): Int { return -1 }  same as  { a * b }
    - flow control
        - for
            
            ```
            fun main() {
                for(i in 0..9){
                    println(i)
                }
            }
            
            import java.util.Scanner
            
            fun main(args: Array<String>) {
                val scanner = Scanner(System.`in`)
                
                val list = listOf<String>()
                
                for(i in 0..1){
                    val stringInput = scanner.nextLine()
                    val valuesList = stringInput.split(" ").map{ item -> item.trim() }
                    valuesList.forEach { item -> println(item) }
                }
            }
            ```
            
    - collections
        - list
            
            ```
            import java.util.Scanner
            
            fun main(args: Array<String>) {
                val scanner = Scanner(System.`in`)
                
                // this one is not used
                val list = listOf<String>()
                
                // create a list from user input and print all items in string given
                for(i in 0..1){
                    val stringInput = scanner.nextLine()
                    val valuesList = stringInput.split(" ").map{ item -> item.trim() }
                    valuesList.forEach { item -> println(item) }
                }
            }
            ```
            
    - Spring Boot With Kotlin
        - Create a simple API
            - https://www.youtube.com/watch?v=229gPlcc5d8&ab_channel=IntelliJIDEAbyJetBrains
                - New Project and run
                - Stop Netty web server with Control-F2
                
                ```java
                package co.uk.philanderson
                
                import org.springframework.boot.autoconfigure.SpringBootApplication
                import org.springframework.web.bind.annotation.RestController
                import org.springframework.boot.runApplication
                import org.springframework.http.MediaType
                import org.springframework.web.bind.annotation.GetMapping
                import org.springframework.web.bind.annotation.PathVariable
                import reactor.core.publisher.Flux
                import java.awt.PageAttributes
                import java.time.Duration
                import java.time.LocalDateTime
                import java.util.concurrent.ThreadLocalRandom
                
                @SpringBootApplication
                class StockServiceApplication
                
                fun main(args: Array<String>) {
                	runApplication<StockServiceApplication>(*args)
                }
                
                @RestController
                class RestController{
                	@GetMapping(value=["/stocks/{symbol}"],produces= [MediaType.TEXT_EVENT_STREAM_VALUE])
                	fun prices(@PathVariable symbol: String): Flux<StockPrice> {
                		return Flux.interval(Duration.ofSeconds(1))
                				.map{StockPrice(symbol,randomStockPrice(), LocalDateTime.now())}
                	}
                	private fun randomStockPrice():Double{
                		return ThreadLocalRandom.current().nextDouble(100.0);
                	}
                }
                data class StockPrice (val symbol: String, val price:Double, val time: LocalDateTime)
                ```
                
        
